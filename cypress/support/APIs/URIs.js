module.exports = {
    URIs:{

        Catalog:{
            Store:{
                FindStoreByURL: "stores/find-by-url",
                LayoutSettings: "/stores/:store-id/layout-setting",
                LandingPage: "/stores/:store-id/landing-page",
                ConfigSettings: "/stores/:store-id/settings",
                StoreCategories: "/stores/:store-id/categories",
                CategoryProductsList: "/stores/:store-id/categories/:catagory-id/products",
                ViewCategory: "/stores/:store-id/categories/:catagory",
                PaymentMethodList: "/stores/:store-id/payment-methods",
                ShippingMethodList: "/stores/:store-id/shipping-methods",
                PaymentAndShipiingMethods: "/stores/:store-id/payment-and-shipping-methods",
                IntegratedPaymentMethodSettings: "/stores/:store-id/integrated-payment-method-settings",
                ApplePaySettings: "/stores/:store-id/apple-pay-settings",
                GetWellKnownFile: "/stores/:store-id/well-known/:file",
                Discounts: "/stores/:store-id/discount-rules",
                DiscountRules: "/stores/:store-id/discount-rules",
                PrivacePolicy: "/stores/:store-id/privacy-policy",
                RefundExchangePolicy: "/stores/:store-id/refund-exchange-policy",
                ComplaintsAndSuggestions: "/stores/:store-id/complaints-and-suggestions",
                License : "/stores/:store-id/license",
                TermsAndConditions: "/stores/:store-id/terms-conditions"
            },

            Customer:{
                Auth:{
                    LoginByEmail: {
                        LoginByEmail: "/customers/login/email",
                        VerifyLoginByEmail: "/customers/login/verify-email"
                    },
                    Login: "/customers/login",
                    Registration: "/customers/register",
                    RegistrationByEmail: "/customers/register-email",
                    VerifyLoginCode: "/customers/login/verify"
                },
                Profile:{
                    View: "/customers/profile",
                    Update: "/customers/profile",
                    UpdateEmail: "/customers/profile/update-email"
                },
                Addresses:{
                    Addresses: "/customers/addresses",
                    Addres: "/customers/addresses/115",
                    Add :"/customers/addresses",
                    Update: "/customers/addresses/1",
                    Delete: "/customers/addresses/389"
                },
                Orders: {
                    StoreOrders: "/customers/store/:store-id/orders",
                    CheckProductBought: "/customers/store/:store-id/orders/products/:product-id"
                }
            },
            Carts: {
                Cart: {
                    CreateSession: "/stores/:store-id/carts",
                    Get :"/stores/:store-id/carts",
                    Delete: "/stores/:store-id/carts",
                    Verify: "/stores/:store-id/carts/verify"
                },
                Products: {
                    Add: "/stores/:store-id/carts/products",
                    Update: "/stores/:store-id/carts/products",
                    Delete: "/stores/:store-id/carts/products"
                },
                ShippingAddresses: {
                    List: "/stores/:store-id/carts/shipping-addresses",
                    Add: "/stores/:store-id/carts/shipping-addresses"
                },
                ShippingMethods: {
                    DeliveryList: "/stores/:store-id/carts/shipping-methods/:method",
                    AddDelivery: "/stores/:store-id/carts/shipping-methods/delivery",
                    PickupList: "/stores/:store-id/carts/shipping-methods/pickup",
                    AddPickup: "/stores/:store-id/carts/shipping-methods/pickup"
                },
                PaymentMethod:{
                    List: "/stores/:store-id/carts/payment-methods",
                    Add: "/stores/:store-id/carts/payment-methods"
                },
                Coupons: {
                    Redeem: "/stores/:store-id/carts/coupons",
                    Remove: "/stores/:store-id/carts/coupons"
                },
                Discounts: "/stores/:store-id/carts/discounts"
            },
            Checkout:{
                PaymentGatewaysWebhooks: {
                    PaytabCreatePayPage: "https://www.paytabs.com/apiv2/create_pay_page",
                    PayfortDirectTransactionFeedBack: "http://catalog.zid/osama/checkout/payfortDirectTransactionFeedBack",
                    PaytabsIPN: "http://catalog.zid/osama/checkout/processPaytabsIPNMessage"
                },
                ConfirmOrder: "/checkout/:cart_payment_request_token/confirm",
                OrderSuccessCallback: "/checkout/:cart_payment_request_token/success",
                OrderSuccessWebhook: "/checkout/:cart_payment_request_token/success-webhook",
                OrderFailedCallback: "/checkout/dqPdt9onhbytlloYseuz8uoGRheUxbX7/failed",
                GetSuccessfulCartOrder: "/checkout/uaBkBGZBxO9yx09Y9iwZYX2ZfLWvt0ki/success-cart-order",
                LogPaymentGatewaysTransactions: "/checkout/log-payment-gateway-transaction"
            },
            Settings:{
                CountryCities: "/settings/cities/?country_id=184"
            },
            StoreBanks:{
                StoreBankList: "/stores/1/banks"
            },
            Orders: {
                UploadBankTransactionSlip: "/stores/:store-id/orders/:order-code/bank-transaction/slip",
                OrderInvoice: "/stores/:store-id/orders/:order-code/invoice"
            },
            Pages:{
                StoreFAQsPage: "/stores/:store-id/pages/faqs",
                StorePageBySlug: "/stores/:store-id/pages/slug/:slug",
                StorePageById: "/stores/:store-id/pages/:page-id"
            },
            Sitemap:{
                SitemapTypeContent: "/stores/:store-id/sitemap/:sitemapType",
                RunSitemapGenerateConsoleCommand: "/settings/commands/script?command=sitemap:generate",
            },
            ProductCatalogFeeds:{
                GetProductCatalogFeed: "/stores/:store-id/product/catalog/feeds/:catalogFeed",
                RunProductCatalogFeedConsoleCommand: "/settings/commands/script?command=sitemap:generate --type=catalog --all ",
            },
            StoreFrontThemes:{
                ThemeLayoutSettings: "/stores/:store-id/storefront-themes/:id/files/layout-settings?template=home.zid"
            },
            Reviews:{
                Products:{
                    ListProductReviews: "/stores/:store-id/reviews/products/:product_id/?page=1&page_size=5",
                    AddProductReview: "/customers/stores/:store-id/reviews/products/:product_id"
                }
            }
        },

        Managers :{
            Account:{
                OnePageRegisteration: "/managers/registration/register",
                Login: "managers/login",
                Profile: "managers/account/profile",
                ThirdPartyAccessToken: "/managers/account/third-parties/authorization-access-token",
                SenderEmail: "/managers/account/sender-email",
                SendEmailVerification: "/managers/account/sender-email",
                Logout: "/managers/logout",
                ValidateUserEmail: "/managers/account/validate-email",
                ValidateStoreUsername: "/managers/account/validate-store-username",
                CreateStore: "/managers/store/create",
                UpdateManagerInfo: "/managers/account/info",
                UpdateStoreInfo: "/managers/store/info",
                UpdateStoreLocation: "/managers/store/location",
                ChangePassword: "/managers/account/password/change",
                ResetPasswordRequest: "/managers/account/password/reset",
                SendResetPasswordEmail: "/managers/account/password/reset/email",
                AutoResetPassword: "/managers/account/password/reset/auto",
                AddDevice: "/managers/account/devices/add",
                UpdateStoreCategory: "/managers/account/store/category",
                HeadScripts: "/managers/store/head-scripts",
                GoogleMapsSettings: "/managers/store/google-maps-settings",
                GetComingSoonNotification: "/managers/store/coming-soon-notification?slug=qoyod",
                SaveComingSoonNotification: "/managers/store/coming-soon-notification",
                SaveCss: "/managers/store/css",
                GetCss: "/managers/store/css",
                DeleteCss: "/managers/store/css/:theme",
                SetStoreCR: "/managers/store/cr",
                GetStoreCR: "/managers/store/cr",
                SetStoreBankInfo: "/managers/store/bank-info",
                SaveIdentityDocument: "/managers/store/identity-document",
                GetIdentityDocument: "/managers/store/identity-document",
                GetStoreBankInfo: "/managers/store/bank-info",
                GetPackages: "/managers/account/subscription/packages",
                GetWebMerhchantToken: "/managers/web-merchant-token",
                LoginByWebToken: "/managers/login/token",
                DeleteCommercialRegisterCertificate: "/managers/store/delete/commercial-register-certificate"                
            },
            Domain:{
                CreateDomain: "/managers/domains"
            },
            TaxSettings:{
                GetTaxSettings: "/managers/store/taxes",
                UpdateGeneralSettings: "/managers/store/taxes",
                AddUpdateCountryTaxSettings: "/managers/store/taxes",
                DeleteTaxRegisterationCertificateCopy: "/managers/store/taxes/tax-registration-certificate/:id",
                ViewCountryTaxSettings: "/managers/store/taxes/:id",
                DeleteCountryTaxSettings: "/managers/store/taxes/:id"
            },
            PurchaseSystem:{
                Coupon:{
                    ViewCoupon: "/managers/store/purchases/coupons?coupon_code=e41d3124-b8d4-4190-a199-6e93087da022"
                },
                Purchasables:{
                    ListPurchasables: "/managers/purchasables?type=sms_sender_id_service",
                    ViewPurchasableByID: "/managers/purchasables/:purchasable_id",
                    ViewPurchasbleByCode: "/managers/purchasables/view-by-code/:code"
                },
                Purchases:{
                    ListPurchases: "/managers/store/purchases?page=1&per_page=30&payment_method_code=credit_card&status_code=",
                    CreateEditPurchase: "/managers/store/purchases",
                    AddPurchaseItemWIP: "/managers/store/purchases/:purchase-id/products",
                    DeletePurchaseItemWIP: "/managers/store/purchases/:purchase-id/products/:purchasable-id",
                    ViewPurchase: "/managers/store/purchases/:purchase-id",
                    ConfirmPurchase: "/managers/store/purchases/:purchase-id/confirm",
                    ConfirmOurchaseTapWebhook: "/managers/store/purchases/:purchase-id/webhook/confirm"
                }
            },
            CustomDomains:{
                DNSRecords:{
                    GetDNSRecords: "/managers/stores/custom-domain/dns-records",
                    AddDNSRecord: "/managers/stores/custom-domain/dns-records",
                    UpdateDNSRecord: "/managers/stores/custom-domain/dns-records/871e64280b532cba1738ff020f812267",
                    DeleteDNSRecord: "/managers/stores/custom-domain/dns-records/78376927224de4370412eba64992770005"
                },
                GetDomain: "/managers/stores/custom-domain",
                AddADomain: "/managers/stores/custom-domain",
                Verify: "/managers/stores/custom-domain/verify",
                Confirm: "/managers/stores/custom-domain/confirm"
            },
            StoreCurrencies:{
                GetAvailableCurrencies: "/managers/store/currencies/all",
                GetStoreCurrencies: "/managers/store/currencies",
                UpdateStoreCurrencies: "/managers/store/currencies?=",
                SetStoreDefaultCurrency: "/managers/store/currencies/default",
                DeleteStoreCurrenct: "/managers/store/currencies/:currency-id"
            },
            StoreCategries:{
                GetStoreCategoriesList: "/managers/store/categories",
                GetStoreCategory: "/managers/store/categories/:category-id/view",
                AddStoreCategory: "/managers/store/categories/add",
                AddUpdateCategoryProducts: "/managers/store/categories/507/products/update",
                DeleteCategoryProducts: "/managers/store/categories/507/products/delete",
                EditStoreCategory: "/managers/store/categories/:category-id/update",
                DeleteStoreCategory: "/managers/store/categories/:id/delete",
                UploadCategoryImage: "/managers/store/categories/507/image/upload",
                DeleteCategoryImage: "/managers/store/categories/507/image/delete",
                UploadCategoryCoverImage: "/managers/store/categories/507/cover-image/upload",
                DeleteCategoryCoverImage: "/managers/store/categories/507/cover-image/delete",
                UpdateCategoryPublishing: "/managers/store/categories/:id/publishing"
            },
            StoreProductOptions:{
                GetStoreOptionList:"/managers/store/options",
                AddStoreOption: "/managers/store/options/add",
                EditStoreOption: "/managers/store/options/1563/update",
                AddStoreOptionValue: "/managers/store/options/1591/values/add",
                EditStoreOptionValue: "/managers/store/options/1563/values/8399/update"
            },
            StoreCustomer:{
                GetStoreCustomers: "/managers/store/customers?page=1&per_page=15",
                GetStoreOnlyPrimaryDataCustomersList: "/managers/store/customers/primary-data-list?page=1&per_page=20&search_term=&order_by=order_counts&sort_by=desc&include_order_count=0",
                ExportAllCustomers: "/managers/store/customers/add",
                AddBulkStoreCustomer: "/managers/store/customers/addBulk",
                ImportCustomers: "/managers/store/customers/import",
                ImportCustomersStatus: "/managers/store/customers/import/6dcab3b3-aa9e-4950-907a-2604e5760615",
                ImportCustomersProgress: "/managers/store/customers/import/6dcab3b3-aa9e-4950-907a-2604e5760615/progress",
                DeleteStoreCustomer: "/managers/store/customers/131/delete",
                ViewStoreCustomer: "/managers/store/customers/37",
                UpdateStoreCustomer: "/managers/store/customers/:id",
                AddStoreCustomerAddress: "/managers/store/customers/addresses",
                AddStoreCustomer: "/managers/store/customers",
                DeleteMultipleCustomers: "/managers/store/customers/bulk"
            },
            StoreOrders:{
                GetStoreOrders:"/managers/store/orders?payload_type=print&page=1&per_page=100",
                GetStoreOrder: "/managers/store/orders/:order-id/view",
                ChangeOrderStatus: "/managers/store/orders/:order-id/change-order-status",
                ChangeOrderBankTransferStatus: "/managers/store/orders/2107/change-bank-transfer-status",
                ExportOrders: "/managers/store/orders/export?status=preparing&customer_id&payment_method&search_term&date_from&date_to&order_by&sort_by",
                DownloadOrderXLSXFile: "/managers/store/orders/download",
                OrdersBulkAction: "/managers/store/orders/bulk-action",
                OrdersBulkActionBatch: "/managers/store/orders/bulk-action/:bulk-action-id",
                GetBulkWaybills: "/managers/store/orders/waybills?order_ids[]=203639&order_ids[]=203547&order_ids[]=181672&order_ids[]=174888&order_ids[]=171062&order_ids[]=170837&order_ids[]=170298&order_ids[]=3281396&order_ids[]=3308386&order_ids[]=3300833&order_ids[]=3300514",
                UpdateOrderPrintedInvoiceSettings: "/managers/store/settings"
            },
            StoreOrderDrafts:{
                GetOrderDrafts: "/managers/store/drafts",
                CreateOrderDraftSessionID: "/managers/store/drafts/create-session-id",
                UpdateOrderDraftCurrency: "/managers/store/drafts/:session-id/currency",
                AddProductToOrderDraft: "/managers/store/drafts/:session-id/products/add",
                AddOrderDraftCustomer: "/managers/store/drafts/:session-id/customer",
                AddOrderDraftCustomerAddress: "/managers/store/drafts/:session-id/customer/address",
                GetOrderDraftShippingMethods: "/managers/store/drafts/:session-id/shipping-methods",
                GetCustomerAddresses: "/managers/store/drafts/:session-id/customer-addresses",
                GetOrderDraftCustomerAddreses: "/managers/store/drafts/:session-id/customer-addresses",
                AddOrderDraftShippingMethod: "/managers/store/drafts/:session-id/shipping-methods/add",
                GetOrderDraftPaymentMethods: "/managers/store/drafts/:session-id/payment-methods",
                AddOrderDraftPaymentMethod: "/managers/store/drafts/:session-id/payment-methods/add",
                RedeemOrderDraftCoupon: "/managers/store/drafts/:session-id/coupon/redeem",
                RemoveOrderDraftCoupon: "/managers/store/drafts/pW8CeEvp6LbjT6nb1BPMtmUEoJs5cAm5/coupon",
                VerifyOrderDraft: "/managers/store/drafts/:session-id/verify",
                ConfirmOrderDraft: "/managers/store/drafts/checkout/confirm",
                ViewOrderDraft: "/managers/store/drafts/:session-id/view",
                DeleteOrderDraft: "/managers/store/drafts/:session-id"
            },
            StoreEditableOrder:{
                StartEditableOrder: "/managers/store/orders/:order-id/edit?",
                GetEditableOrder: "/managers/store/orders/edit/:token",
                AddProducts: "/managers/store/orders/edit/:token/products",
                EditProducts: "/managers/store/orders/edit/hD4Zx0zRV8AMBrlmIgaXSseZ8jQQRDnm/products",
                DeleteProducts: "/managers/store/orders/edit/:token/products/224",
                EditShippingAddress: "/managers/store/orders/edit/NMkG1flWjJrvZWK8XHBhG2yWTMpEDIvS/shipping-address",
                GetShippingMethod: "/managers/store/orders/edit/:token/shipping-methods",
                AddShippingMethod: "/managers/store/orders/edit/:token/shipping-methods",
                GetPaymentMethod: "/managers/store/orders/edit/YZkxbe6EK1xL7XaekEV5pzltYWxyvMkT/payment-methods",
                AddPaymentMethod: "/managers/store/orders/edit/NMkG1flWjJrvZWK8XHBhG2yWTMpEDIvS/payment-methods",
                RedeemCoupon: "/managers/store/orders/edit/:token/coupon",
                RemoveCoupon: "/managers/store/orders/edit/45gfwFoGqh0Fz9wgnsuh0xgR2JwMNtYs/coupon",
                AddCustomerNote: "/managers/store/orders/edit/hD4Zx0zRV8AMBrlmIgaXSseZ8jQQRDnm/customer-note",
                ConfirmUpdate: "/managers/store/orders/edit/:token"
            },
        
       
        }


    } 
}