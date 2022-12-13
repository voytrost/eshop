import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    return (
        <div className="shop-cart">
            {props.orders.map((el) => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
        </div>
    );
};

const showNothing = () => {
    return (
        <div className="empty">
            <h2>no products</h2>
        </div>
    );
};

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Dashboard</li>
                </ul>
                <FaShoppingCart
                    onClick={() => setCartOpen((cartOpen = !cartOpen))}
                    className={`shop-cart-button ${cartOpen && "active"}`}
                />

                {/* {cartOpen && (
                    <div className="shop-cart">
                        {props.orders.map((el) => (
                            <Order key={el.id} item={el} />
                        ))}
                    </div>
                )} */}

                {cartOpen && (
                    <div className="shop-cart">
                        {props.orders.length > 0
                            ? showOrders(props)
                            : showNothing()}
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    );
}
