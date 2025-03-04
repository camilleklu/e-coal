import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="w-full bg-white shadow-md py-4 border-b border-black flex items-center justify-between px-4 max-w-sm mx-auto">
      <h1 className="text-lg font-bold italic">K-Music Insider</h1>

      {/* Botão para abrir o menu */}
      <Button type="text" icon={<MenuOutlined />} onClick={() => setVisible(true)} />

      {/* Menu lateral para mobile */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
        width={250} // Ajustado para mobile
        bodyStyle={{ padding: "10px" }}
      >
        <ul className="text-base font-bold space-y-4">
          <li><Link to="/" onClick={() => setVisible(false)}>Home</Link></li>
          <li><Link to="/articles" onClick={() => setVisible(false)}>Articles</Link></li>
          <li><Link to="/search" onClick={() => setVisible(false)}>Search</Link></li>
          <li><Link to="/login" onClick={() => setVisible(false)}>Login</Link></li>
        </ul>
      </Drawer>
    </header>
  );
};

export default Navbar;