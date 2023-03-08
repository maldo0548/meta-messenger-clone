import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
    return (
        <div>
            <div className="grid justify-center">
                <Image
                    className="rounded-full mx-2 object-cover"
                    src="https://links.papareact.com/161"
                    width={700}
                    height={700}
                    alt="Meta Logo"
                />
            </div>
            {/* @ts-expect-error Server Component */}
            <SignInComponent />
        </div>
    );
}

export default SignInPage;
