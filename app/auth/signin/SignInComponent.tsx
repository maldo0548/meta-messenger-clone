"use client";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function SignInComponent() {
    let [providers, setProviders] = useState<Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null>(null);
    useEffect(() => {
        async function gatherProviders() {
            setProviders(await getProviders());
        }
        gatherProviders();
    }, []);
    if (!providers) {
        return;
    }

    return (
        <div className="flex justify-center">
            {Object.values(providers!).map((provider) => {
                return (
                    <div key={provider.name}>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() =>
                                signIn(provider.id, {
                                    callbackUrl: process.env.VERCEL_URL || "http://localhost:3000/",
                                })
                            }
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default SignInComponent;
