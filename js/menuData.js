// Homepage Categories (6 Filter Pills)
const homepageCategories = [
    { id: "all", label: "All" },
    { id: "veg", label: "Veg" },
    { id: "nonveg", label: "Non-Veg" },
    { id: "pizza", label: "Pizza" },
    { id: "chinese", label: "Chinese" },
    { id: "shakes", label: "Shakes" }
];

// All 19 Full Menu Categories
const fullCategories = [
    { id: "appetizers", label: "Appetizers" },
    { id: "starters", label: "Starters" },
    { id: "tandoor", label: "Tandoor" },
    { id: "burger", label: "Burger" },
    { id: "sandwich", label: "Sandwich" },
    { id: "pizza", label: "Pizza" },
    { id: "maggi", label: "Maggi" },
    { id: "pasta", label: "Pasta" },
    { id: "momos", label: "Momos" },
    { id: "noodles", label: "Noodles" },
    { id: "rice_biryani", label: "Rice & Biryani" },
    { id: "main_course_veg", label: "Veg Main Course" },
    { id: "main_course_chicken", label: "Chicken Main Course" },
    { id: "soups", label: "Soups" },
    { id: "shakes", label: "Shakes" },
    { id: "mocktails", label: "Mocktails" },
    { id: "fries", label: "French Fries" },
    { id: "sizzlers", label: "Sizzlers" }
];

// Complete Sunshine Cafe Dishes Dataset
const fullMenuData = [
    { id: 25, name: "Sunshine Special Veg Maggi", category: "chinese", isVeg: true, isFeatured: true, price: 145, tag: "⭐ Chef's Special", desc: "Loaded with fresh farm vegetables, butter, and house secret spices.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNXNpBFRXCWlMc-fRDcbgR7XW7Tgwi680DpU0cH9v3A1WnyYdIlEEkc_e3Ck8nAty835cDRpXjUnJqCFxM_Lvu8sKVV3KPdsOJbkDaFB2KEQqVinBQ7WY3F72fNIBnFsRzAI2H5Ftbw_9uYF-_a6J98WSzYTP-CEBD_jjLqekWLWIoLP247mXMNjl7HXcpelZ2jmr8kYXrgMty2pRMwhecn0HHQ_UYhVLCUnaRdzWxCCX6t8hGYnV3TLGJ0ecGUbusF9oc5TFhuKLO" },
    { id: 22, name: "Sunshine Special Chicken Pizza", category: "pizza", isVeg: false, isFeatured: true, price: 330, tag: "🔥 Best Seller", desc: "Loaded chicken tikka chunks, capsicum, olives, jalapenos & double smoked cheese.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAfm51TbCP9b_FI6gz_liBqaP9tMry8E11j4eH91KZ8xDKHzj2Hm_2d9f6SqxWxadz-qHE0F1egM5Qa6NlVUGz78Ffd1vedespDbFCrptJk96_CS2YEFZ3oinroYJ8s9-xFt0D0uKkuqF-6tTi75oOK4dbJ6Ybj262TZuBQkSqYbouuXZvV8dxvn_s8IJKGINLLiSldq7yqS88jaCK8GKOxsOIstbbrhzQYjFbQgLevw1zkMLEOvzDC729CM1_wd4ms0YVj9IAcbCp" },
    { id: 7, name: "Chicken Tikka", category: "nonveg", isVeg: false, isFeatured: true, price: 350, tag: "🔥 Best Seller", desc: "Succulent tender chicken chunks marinated in rich tandoori spices.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAfm51TbCP9b_FI6gz_liBqaP9tMry8E11j4eH91KZ8xDKHzj2Hm_2d9f6SqxWxadz-qHE0F1egM5Qa6NlVUGz78Ffd1vedespDbFCrptJk96_CS2YEFZ3oinroYJ8s9-xFt0D0uKkuqF-6tTi75oOK4dbJ6Ybj262TZuBQkSqYbouuXZvV8dxvn_s8IJKGINLLiSldq7yqS88jaCK8GKOxsOIstbbrhzQYjFbQgLevw1zkMLEOvzDC729CM1_wd4ms0YVj9IAcbCp" },
    { id: 35, name: "Chicken Biryani", category: "nonveg", isVeg: false, isFeatured: true, price: 210, tag: "⭐ Signature", desc: "Aromatic basmati rice layered with spiced marinated chicken cooked on dum.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzkJu3dUN4zDIYh7R511mdkILaoix9K47toakUJZAYuvafEKdCTDh_fkmY_ew0Go9TdY4ZhiX47NyRpEmoYIpZbPMTGz7mmxROCznU7rZZ8eyecHcu7HZn_ModvbhmpXby3AYpqHIkAQ447f6sW9s3q3YISyCBGFVBius4sJ-vUG1DQMdqmApkEaRKfsvygeko8O1qxenWuJNJcwCXgWXijlxDog26Jw2miBUT-J3GJg4C9-fn7JMfu-epKy5_8ZtAZKYID_n7VqdM" },
    { id: 36, name: "Paneer Butter Masala", category: "veg", isVeg: true, isFeatured: true, price: 240, tag: "❤️ Customer Favourite", desc: "Fresh cottage cheese cooked in a rich, buttery tomato gravy.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0vwWdZ6RI0eooQyVPKcvHsmY8Xm3rqm4NGHi0NI9MVEt9ROn9pW-NnkHSVrypkIudi1rXHwCQgfUL8GpEvN6rYEtPuKs0qjmEHD2ulKYVKUzcSShb9SxAlxJY3rf6-TyJjRK4U_Ek-ARTrcVET_yW1nQ60TjAR314hHnv19LVZxiXLkbfzARGYGNGYc5Ev_MgvIzmrQ8bqbWmkdaNNc71WudVNPY5ZBi8WNX2KT1AHwq7KIO2CodAL9CnlH8VMOTjiTy5VJybBWYh" },
    { id: 42, name: "Signature Cold Coffee", category: "shakes", isVeg: true, isFeatured: true, price: 90, tag: "⭐ Best Seller", desc: "Thick roasted espresso blended with ice cream and dark chocolate drizzle.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVtf-G7fZtWMTcfKZpla8UtDhqJ0U5hKMZBOrsMGL7_7LBUsEAUhLt8jgi6pE6k677-jAEJ9tumi6EaTkmEcLMglkl7MDjd9L1uris6yfoPtXToNTxBs80WTylQxT3zOsg3Z4dSeTESkp_VGXirlbS5TYp2E37fqLbfhx8lTfg1iOYyfdcihiw8kR-Seon1NKygw-cb2z_2fxQyApHyblSSCGxukv2zVQKhaN7hswSwJPVzV5Qr5PBEF3roTDOIbhaer2gozELLXfD" },

    // Additional Menu Items
    { id: 1, name: "Corn Chaat", category: "appetizers", isVeg: true, price: 110, tag: "❤️ Customer Favourite", desc: "Crispy sweet corn tossed with tangy Indian spices.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNXNpBFRXCWlMc-fRDcbgR7XW7Tgwi680DpU0cH9v3A1WnyYdIlEEkc_e3Ck8nAty835cDRpXjUnJqCFxM_Lvu8sKVV3KPdsOJbkDaFB2KEQqVinBQ7WY3F72fNIBnFsRzAI2H5Ftbw_9uYF-_a6J98WSzYTP-CEBD_jjLqekWLWIoLP247mXMNjl7HXcpelZ2jmr8kYXrgMty2pRMwhecn0HHQ_UYhVLCUnaRdzWxCCX6t8hGYnV3TLGJ0ecGUbusF9oc5TFhuKLO" },
    { id: 2, name: "Garlic Bread with Cheese", category: "appetizers", isVeg: true, price: 130, tag: "⭐ Chef's Special", desc: "Oven-baked crusty garlic bread with cheese.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFe6g7JAj05RCByz8i5EtHIrSBkj23bwvVPTCJcdJyjUmQneITzzOky5g4-1D-9eMUz2s3wEAlUo6gKY6S2LbZIXz2zgiD8yVHfRCuFwpIFw5KAjEjWjTq6WwH1EhFYSIE7F3vL6blgyI1zLRr12QWv07_QhRQolOTbgRBXp3F6HEN7We0eDW6zG2GPJ83-_vNA0TVhCr2cIyo6N2FrOtQRLJZTpOwZfXiUwW3s4SrH7VH3cuxISX8xMMcENgISByWP9fhO54q1qBK" },
    { id: 8, name: "Veg Burger", category: "burger", isVeg: true, price: 90, tag: "🌱 Classic", desc: "Crispy vegetable patty with fresh lettuce and mayo.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_zxz1FLBRXeGr7a0_T3giLF2mcVrbIfQyD8KSwhEqjL7AG8WHm_ms583h3P3w1IXOMMqCYF4H_mATJuGdmTehpE0poaPgYt6qJIgpI25kXcvpR_HbFQ4mXsT4Oki4657uGImTB_pBRGqBh5b-VVHh7tGShVY6AIEpbbs2bfLzk914XBHqRnct2TIpGtJCJyWPjHViNvFJtUZNQky3jjWxUqsIDV8WNsI1aEYJzKKgB2GbeEuhRfhAtAUCz1xIUpXNyiVzRauI5Gk" },
    { id: 16, name: "Margherita Pizza", category: "pizza", isVeg: true, price: 180, tag: "⭐ Italian Classic", desc: "Tomato sauce and double mozzarella cheese.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_zxz1FLBRXeGr7a0_T3giLF2mcVrbIfQyD8KSwhEqjL7AG8WHm_ms583h3P3w1IXOMMqCYF4H_mATJuGdmTehpE0poaPgYt6qJIgpI25kXcvpR_HbFQ4mXsT4Oki4657uGImTB_pBRGqBh5b-VVHh7tGShVY6AIEpbbs2bfLzk914XBHqRnct2TIpGtJCJyWPjHViNvFJtUZNQky3jjWxUqsIDV8WNsI1aEYJzKKgB2GbeEuhRfhAtAUCz1xIUpXNyiVzRauI5Gk" },
    { id: 28, name: "Steamed Momos", category: "momos", isVeg: true, price: 90, tag: "🌱 Pure Veg", desc: "Steamed dumplings filled with vegetables.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMGH__JNIPVLqyJ5L3NUZCf4H71sRH_QHpcbaHUxnTeo58acYsVq9W3J9pmJQTRQAhojrCvtRYrK6b85t28PFIxjS3fDj4XM05SgrQf8fOft6gtaiWK1YY9PBBNgi4SQ9wWR2cjGTpqGMcyPZjEv_H04P0E61mNEiazmN19kavOjwSV7r7oaTb8VwAye_mrDAdEgJPtM3uNjF4RkZbixPBpXWBRK1fhWpvetjDekMThtqKMjNnqylCqERdaZZVeCkvv38nkSuijfJO" },
    { id: 39, name: "Butter Chicken", category: "main_course_chicken", isVeg: false, price: 340, tag: "⭐ Chef's Special", desc: "Tandoori chicken simmered in creamy tomato gravy.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAfm51TbCP9b_FI6gz_liBqaP9tMry8E11j4eH91KZ8xDKHzj2Hm_2d9f6SqxWxadz-qHE0F1egM5Qa6NlVUGz78Ffd1vedespDbFCrptJk96_CS2YEFZ3oinroYJ8s9-xFt0D0uKkuqF-6tTi75oOK4dbJ6Ybj262TZuBQkSqYbouuXZvV8dxvn_s8IJKGINLLiSldq7yqS88jaCK8GKOxsOIstbbrhzQYjFbQgLevw1zkMLEOvzDC729CM1_wd4ms0YVj9IAcbCp" }
];
