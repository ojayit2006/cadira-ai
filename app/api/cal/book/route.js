export async function POST(request) {
  const body = await request.json();
  const { start, name, email, timeZone } = body;

  if (!start || !name || !email) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const durationMinutes = Number(process.env.CAL_EVENT_DURATION_MINUTES || 30);
  const end = new Date(new Date(start).getTime() + durationMinutes * 60000).toISOString();

  const res = await fetch(`${process.env.CAL_API_BASE}/booking/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CAL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventTypeSlug: `${process.env.CAL_USERNAME}/${process.env.CAL_EVENT_SLUG}`,
      start,
      end,
      timeZone: timeZone || "UTC",
      responses: { name, email },
    }),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    return Response.json(
      { error: "The scheduling service is temporarily unavailable. Please try again shortly." },
      { status: 502 }
    );
  }

  if (!res.ok || !data.success) {
    return Response.json(
      { error: data?.error?.message || data?.message || "Failed to create booking" },
      { status: res.ok ? 502 : res.status }
    );
  }

  return Response.json(data);
}
