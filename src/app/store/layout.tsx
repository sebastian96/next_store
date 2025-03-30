export default function StoreLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <main>
        <nav>Navigation of categories</nav>
        {children}
    </main>
}
