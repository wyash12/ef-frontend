import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

export default function CourseIndexPgae(): JSX.Element {
  const router: NextRouter = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return <></>;
}
