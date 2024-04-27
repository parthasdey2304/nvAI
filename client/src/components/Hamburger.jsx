import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Hamburger() {
  return (
    <Navbar className="fixed w-full h-[70px] bg-red-900">
      <Navbar.Brand href="/">
        <span className="text-white text-4xl md:text-5xl font-semibold font-['Jersey']">nvAI</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/detection" className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']">Detection</Navbar.Link>
        <Navbar.Link href="https://github.com/parthasdey2304/nvAI.git" className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']">GitHub</Navbar.Link>
        <Navbar.Link href="/about" className="text-white text-xl font-medium px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
