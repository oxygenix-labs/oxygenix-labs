import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    productId: string;
    variantId: string;
    productName: string;
    variantName: string;
    price: number;
    quantity: number;
    image: string;
    coverage: string;
    includeAMC?: boolean;
    amcPrice?: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
    removeItem: (productId: string, variantId: string) => void;
    updateQuantity: (productId: string, variantId: string, quantity: number) => void;
    toggleAMC: (productId: string, variantId: string) => void;
    clearCart: () => void;
    getItemCount: () => number;
    getSubtotal: () => number;
    getTax: () => number;
    getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) => {
                const existingItem = get().items.find(
                    (i) => i.productId === item.productId && i.variantId === item.variantId
                );

                if (existingItem) {
                    set({
                        items: get().items.map((i) =>
                            i.productId === item.productId && i.variantId === item.variantId
                                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                                : i
                        ),
                    });
                } else {
                    set({
                        items: [...get().items, { ...item, quantity: item.quantity || 1 }],
                    });
                }
            },

            removeItem: (productId, variantId) => {
                set({
                    items: get().items.filter(
                        (i) => !(i.productId === productId && i.variantId === variantId)
                    ),
                });
            },

            updateQuantity: (productId, variantId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId, variantId);
                    return;
                }

                set({
                    items: get().items.map((i) =>
                        i.productId === productId && i.variantId === variantId
                            ? { ...i, quantity }
                            : i
                    ),
                });
            },

            toggleAMC: (productId, variantId) => {
                set({
                    items: get().items.map((i) =>
                        i.productId === productId && i.variantId === variantId
                            ? { ...i, includeAMC: !i.includeAMC }
                            : i
                    ),
                });
            },

            clearCart: () => {
                set({ items: [] });
            },

            getItemCount: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getSubtotal: () => {
                return get().items.reduce((total, item) => {
                    const itemTotal = item.price * item.quantity;
                    const amcTotal = item.includeAMC && item.amcPrice ? item.amcPrice * item.quantity : 0;
                    return total + itemTotal + amcTotal;
                }, 0);
            },

            getTax: () => {
                const subtotal = get().getSubtotal();
                return subtotal * 0.18; // 18% GST
            },

            getTotal: () => {
                return get().getSubtotal() + get().getTax();
            },
        }),
        {
            name: 'oxygenix-cart',
        }
    )
);
