export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center items-center min-h-screen w-screen	">
			<div className="">
				{children}
			</div>
		</section>
	);
}
