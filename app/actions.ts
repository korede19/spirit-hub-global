"use server";

export async function submitPrayerRequest(
  _prev: unknown,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const request = formData.get("request") as string;

  if (!name?.trim() || !whatsapp?.trim() || !request?.trim()) {
    return { success: false, message: "Please fill in all fields.", waText: "" };
  }

  const waText = `[PRAYER REQUEST]\nName: ${name}\nWhatsApp: ${whatsapp}\nRequest: ${request}`;

  return {
    success: true,
    message: "Your prayer request has been received. Our intercessors will stand with you.",
    waText,
  };
}

export async function submitNewConvert(
  _prev: unknown,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const whatsapp = formData.get("whatsapp") as string;

  if (!name?.trim() || !email?.trim() || !whatsapp?.trim()) {
    return { success: false, message: "Please fill in all fields.", waText: "" };
  }

  const waText = `[NEW CONVERT REGISTRATION]\nName: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}`;

  return {
    success: true,
    message: "Welcome to the family! Someone will reach out to walk this journey with you.",
    waText,
  };
}

export async function submitTestimony(
  _prev: unknown,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const testimony = formData.get("testimony") as string;

  if (!name?.trim() || !whatsapp?.trim() || !testimony?.trim()) {
    return { success: false, message: "Please fill in all fields.", waText: "" };
  }

  const waText = `[TESTIMONY]\nName: ${name}\nWhatsApp: ${whatsapp}\nTestimony: ${testimony}`;

  return {
    success: true,
    message: "Thank you for sharing! Your testimony will inspire and strengthen others.",
    waText,
  };
}
