import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: "iPhone 14",
                    img: "1.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Apple",
                    price: 41500,
                },
                {
                    id: 2,
                    title: "iPhone 13 Pro",
                    img: "2.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Apple",
                    price: 45000,
                },
                {
                    id: 3,
                    title: "Samsung Galaxy M32",
                    img: "3.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Samsung",
                    price: 9000,
                },
                {
                    id: 4,
                    title: "Samsung Galaxy S10",
                    img: "4.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Samsung",
                    price: 25400,
                },
                {
                    id: 5,
                    title: "Xiaomi Redmi 9A",
                    img: "5.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Xiaomi",
                    price: 5000,
                },
                {
                    id: 6,
                    title: "Xiaomi Redmi NOTE 10S",
                    img: "6.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Xiaomi",
                    price: 9300,
                },
                {
                    id: 7,
                    title: "Huawei Nova Y70",
                    img: "7.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Huawei",
                    price: 7500,
                },
                {
                    id: 8,
                    title: "Huawei Mate 10",
                    img: "8.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Huawei",
                    price: 23100,
                },
                {
                    id: 9,
                    title: "Huawei P40 Pro",
                    img: "9.jpg",
                    desc: "Lorem ipsum dolor sit amet",
                    category: "Huawei",
                    price: 32100,
                },
            ],
        };
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }
    render() {
        return (
            <div className="wrapper">
                <Header
                    orders={this.state.orders}
                    onDelete={this.deleteOrder}
                />
                <Items items={this.state.items} onAdd={this.addToOrder} />
                <Footer />
            </div>
        );
    }

    deleteOrder(id) {
        this.setState({
            orders: this.state.orders.filter((el) => el.id !== id),
        });
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach((el) => {
            if (el.id === item.id) isInArray = true;
        });
        if (!isInArray) {
            this.setState({ orders: [...this.state.orders, item] });
        }
    }
}

export default App;
