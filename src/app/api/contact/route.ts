import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  // 데이터 형태(schema) 정의
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  // API route에서 사용하는 request는 노드에서 사용하는 것과 동일
  // req.body는 readable stream이므로 json으로 변환이 필요함
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
      status: 400,
    });
  }
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일 전송 성공" }), {
          status: 200,
        }),
    )
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
        status: 500,
      });
    });
}
