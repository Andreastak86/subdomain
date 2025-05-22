import Link from "next/link";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1>Her kommer innloggingsportalen for meg selv</h1>
            <p>Det blir spennende å se hva jeg skal gjøre her</p>
            <Link href='https://www.andreastak.no'>
                <button>Gå tilbake</button>
            </Link>
        </main>
    );
}
