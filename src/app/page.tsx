'use client';
// import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

function Home() {
  const { data: sessionData, status } = useSession();
  console.log(sessionData);
  
  return (
    <>
      <div className="bg-olive-one selection:bg-green-two min-h-screen p-0 md:px-8 md:py-24">
        <main className="bg-cream-four md:outline-cream-four mx-auto min-h-screen max-w-none rounded-none px-5 pb-10 pt-24 outline-none md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8">
          <h1 className="text-gray-three mb-6 text-center text-4xl font-bold">
            ToDo List
          </h1>
          {status !== "loading" && sessionData && (
            // status が "loading" でない、つまり認証情報の取得が完了している、
            // かつ、認証されている場合に、下記が表示されます
            <>
              <div className="flex flex-col items-center">
                <p className="text-l mb-4 text-center">
                  <span>Logged in as {sessionData.user?.email}</span>
                </p>
                <button
                  className="outline-green-one hover:text-green-five mb-8 inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 font-semibold outline outline-2 outline-offset-2"
                  onClick={() => void signOut()}
                >
                  Sign out
                </button>
              </div>
              <div>Todo components coming soon...</div>
            </>
          )}
          {status !== "loading" && !sessionData && (
            // status が "loading" でない、つまり認証情報の取得が完了している、
            // かつ、認証されていない場合に、下記が表示されます
            <div className="flex flex-col items-center">
              <button
                className="outline-green-one hover:text-green-five mb-5 inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 font-semibold outline outline-2 outline-offset-2"
                onClick={() => void signIn()}
              >
                Sign In
              </button>
              <div className="mb-5 text-xl">
                <p className="text-gray-four text-center">
                  Keep your life in order with todolist
                </p>
                <p className="text-gray-four text-center">
                  - The ultimate productivity tool -
                </p>
              </div>
              {/* <div className="">
                <Image
                  src="/images/main-img.png"
                  width={600}
                  height={600}
                  alt="main-img"
                />
              </div> */}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Home;
