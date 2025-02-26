import { useState } from "react";

export default function LoginModal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
                <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">○</span>
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-center mb-2">Welcome back</h2>
                <p className="text-zinc-600 text-center mb-4">Enter your credentials to login to your account.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="mb-2 block text-zinc-700">Email</label>
                        <input
                            type="email"
                            placeholder="hi@yourcompany.com"
                            className="w-full px-3 py-2 border-zinc-300 border-1 focus:ring-1 focus:outline-none rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block text-zinc-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center text-zinc-700">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            Remember me
                        </label>
                        <a href="#" className="text-black hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-zinc-900 text-white py-2 rounded-lg hover:bg-zinc-800"
                    >
                        Sign in
                    </button>
                </form>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-zinc-300" />
                    <span className="px-2 text-zinc-500">Or</span>
                    <hr className="flex-grow border-zinc-300" />
                </div>
                <button className="w-full border py-2 rounded-lg flex items-center justify-center hover:bg-zinc-100">
                    Login with Google
                </button>
            </div>
        </div>
    );
}
