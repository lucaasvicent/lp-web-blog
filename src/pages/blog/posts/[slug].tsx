import { useRouter } from "next/router";

export default function Post() {
  const Router = useRouter();
  const { slug } = Router.query;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Post: {slug}</h1>
      <p>Welcome to the post page!</p>
    </div>
  );
}

/**
 * 
 * 
 * import { useRouter } from "next/router";

export default function Post() {
  const Router = useRouter();
  const segments = Router.query.slug as string[] | undefined;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Post: {segments?.join('/')}</h1>
      <p>Welcome to the post page!</p>
    </div>
  );
}
 */