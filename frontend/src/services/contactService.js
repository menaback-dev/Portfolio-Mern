export async function sendMessage(data) {
  console.log("Contact Form:", data);

  return {
    success: true,
    message: "Message sent successfully",
  };
}