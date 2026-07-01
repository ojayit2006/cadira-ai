export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const timeZone = searchParams.get("timeZone") || "UTC";

  if (!date) {
    return Response.json({ error: "Missing date" }, { status: 400 });
  }

  const start = `${date}T00:00:00.000Z`;
  const end = `${date}T23:59:59.999Z`;

  const url = new URL(`${process.env.CAL_API_BASE}/slots/`);
  url.searchParams.set("eventTypeSlug", `${process.env.CAL_USERNAME}/${process.env.CAL_EVENT_SLUG}`);
  url.searchParams.set("start", start);
  url.searchParams.set("end", end);
  url.searchParams.set("timeZone", timeZone);

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.CAL_API_KEY}` },
    cache: "no-store",
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
      { error: data?.error?.message || data?.message || "Failed to fetch slots" },
      { status: res.ok ? 502 : res.status }
    );
  }

  const daySlots = data.data?.slots?.[date] || [];
  return Response.json({ slots: daySlots.map((s) => ({ start: s.time })) });
}
