import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  // API route에 이메일 전송을 위한 요청 fetch
  // 해당 컴포넌트 안에서 작성해도 문제는 없지만 서비스로직을 따로 빼는 것을 추천
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청에 실패함");
  }
  return data;
}
