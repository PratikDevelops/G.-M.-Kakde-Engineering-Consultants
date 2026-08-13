export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    const res = await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.result !== 'success') {
      throw new Error('Sheet write failed');
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json(
      { success: false, error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}