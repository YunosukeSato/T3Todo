"use client"; // クライアントコンポーネントとして宣言

import { signIn } from "next-auth/react";

type Provider = {
  id: string;
  name: string;
};

type SignInButtonProps = {
  provider: Provider;
};

const SignInButton = ({ provider }: SignInButtonProps) => {
  return (
    <button
      className="hover:text-green-five inline-flex w-full cursor-pointer items-center justify-center rounded-md p-4 text-xl font-bold"
      // このボタンを押すと GitHub による認証が行われます
      // また、認証後のリダイレクト先をルートパスに設定しています
      onClick={() =>
        void signIn(provider.id, {
          callbackUrl: "/",
        })
      }
    >
      Sign in with {provider.name}
    </button>
  );
};

export default SignInButton;
