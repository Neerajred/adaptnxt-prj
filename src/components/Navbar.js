import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const navList = [
        "Dashboard",
        "Inventory",
        "Orders",
        "Returns",
        "Customers",
        "Shipping",
        "Channel",
        "Integrations"
    ];

    const [selectedCat, setCat] = useState("Dashboard");

    const OnChangeCat = (category) => {
        setCat(category);
    };

    return (
        <div>
            <ul style={{ listStyleType: "none", padding: "0px", margin: "0px" }}>
                {navList.map((category) => (
                    <li onClick={() => {
                        OnChangeCat(category);
                    }} key={category} >
                        <Link 
                            to={`/${category.toLowerCase()}`}
                            style={{ cursor: "pointer", textDecoration: 'none' }}
                            className={category === selectedCat ? 'selected' : 'nav-items'}
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
            <select
                onChange={(e) => {
                    OnChangeCat(e.target.value);
                }}
                value={selectedCat === "Calculators" ? "Calculators" : ""}
                className={"Calculators" === selectedCat ? 'selected' : 'nav-items'}
            >
                <option value="Calculators">
                    <Link to="/calculators" style={{ textDecoration: 'none' }}>Calculators</Link>
                </option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
            </select>
            <select
                onChange={(e) => {
                    OnChangeCat(e.target.value);
                }}
                value={selectedCat === "Reports" ? "Reports" : ""}
                className={"Reports" === selectedCat ? 'selected' : 'nav-items'}
            >
                <option value="Reports">
                    <Link to="/reports" style={{ textDecoration: 'none' }}>Reports</Link>
                </option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
            </select>
            <select
                onChange={(e) => {
                    OnChangeCat(e.target.value);
                }}
                value={selectedCat === "Account" ? "Account" : ""}
                className={"Account" === selectedCat ? 'selected' : 'nav-items'}
            >
                <option value="Account">
                    <Link to="/account" style={{ textDecoration: 'none' }}>Account</Link>
                </option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
            </select>
        </div>
    );
}
