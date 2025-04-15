export const dynamic = "force-static";

export default function NetlifyFormPrerenderer() {
  return (
    <form name="contact" netlify hidden>
      <input type="text" name="email" />
      <input type="text" name="subject" />
      <textarea name="message"></textarea>
    </form>
  );
}
