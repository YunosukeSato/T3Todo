import type { BuiltInProviderType } from "next-auth/providers/index";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { getProviders } from "next-auth/react";
// import Image from "next/image";
import SignInButton from "./SignInButton";

type Providers = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>;

async function fetchProviders(): Promise<Providers | []> {
  // ここで、認証の方法（providers）を取得しています
  // 今回は、GitHub による認証だけですが、複数の認証方法（Google・Twitterなど）を取得することが出来ます
  // 一つも認証方法が取得できなかった場合は、providers に空の配列をセットしています
  const providers = await getProviders();

  return providers ?? [];
}

export default async function SignIn() {
  const providers = await fetchProviders();
  
  return (
    <>
      <div className="bg-olive-one selection:bg-green-two min-h-screen p-0 md:px-8 md:py-24">
        <div className="flex flex-col items-center space-y-20 pt-40">
          {/* <Image
            src="/images/github-icon.png"
            width={170}
            height={170}
            alt="github-icon"
          /> */}
          <div className="text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flexjustify-center"></div>
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <SignInButton provider={provider} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
