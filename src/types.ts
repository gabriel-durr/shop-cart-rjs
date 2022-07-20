export interface Product {
	// tipagem dos produtos
	id: number;
	title: string;
	price: number;
	image: string;
	amount: number;
}

export interface Stock {
	// tipagem do stock
	id: number;
	amount: number;
}
