const Footer = () => {
    return (
        <footer className="footer bg-white justify-center items-center p-4">
            <aside className="flex flex-col items-center">
                <img src="/logo_katharsis.png" alt="Logo" className="w-[200px]" title="Katharsis" />
                <p
                    className="text-sm text-center text-black/80"
                >Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    )
}
export default Footer;