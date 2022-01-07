function Header({ title, text }: { title: string, text: string }) {
    return (
        <>
            <h1 className="text-xl font-medium leading-6 text-gray-900 mb-2">{title}</h1>
            <p className="text-sm text-gray-600">{text}</p>
        </>
    );
}

export default Header;
