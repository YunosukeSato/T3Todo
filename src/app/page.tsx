"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { CreateTodo } from "~/app/_components/CreateTodo";
import { Todos } from "~/app/_components/Todos";

function Home() {
  const { data: sessionData, status } = useSession();

  return (
    <>
      <div className="min-h-screen bg-olive-one p-0 selection:bg-green-two md:px-8 md:py-24">
        <main className="mx-auto min-h-screen max-w-none rounded-none bg-cream-four px-5 pb-10 pt-24 outline-none md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-cream-four">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-three">
            ToDo List
          </h1>
          {status !== "loading" && sessionData && (
            <>
              <div className="flex flex-col items-center">
                <p className="text-l mb-4 text-center">
                  <span>Logged in as {sessionData.user?.email}</span>
                </p>
                <button
                  className="mb-8 inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 font-semibold outline outline-2 outline-offset-2 outline-green-one hover:text-green-five"
                  onClick={() => void signOut()}
                >
                  Sign out
                </button>
              </div>
              <div>
                <CreateTodo />
                <Todos />
              </div>
            </>
          )}
          {status !== "loading" && !sessionData && (
            <div className="flex flex-col items-center">
              <button
                className="mb-5 inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 font-semibold outline outline-2 outline-offset-2 outline-green-one hover:text-green-five"
                onClick={() => void signIn()}
              >
                Sign In
              </button>
              <div className="mb-5 text-xl">
                <p className="text-center text-gray-four">
                  Keep your life in order with todolist
                </p>
                <p className="text-center text-gray-four">
                  - The ultimate productivity tool -
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Home;
