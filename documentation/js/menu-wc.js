'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">projeto-lanchonete2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-a551943ac83b92229a16ec9c7a4882e6e4f0ab8981b463e847ba038646f48b632a3a98fc05615ee29a7dba5185ca53f68a1eacc2e3046abd40043e7819e25f12"' : 'data-bs-target="#xs-controllers-links-module-AppModule-a551943ac83b92229a16ec9c7a4882e6e4f0ab8981b463e847ba038646f48b632a3a98fc05615ee29a7dba5185ca53f68a1eacc2e3046abd40043e7819e25f12"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a551943ac83b92229a16ec9c7a4882e6e4f0ab8981b463e847ba038646f48b632a3a98fc05615ee29a7dba5185ca53f68a1eacc2e3046abd40043e7819e25f12"' :
                                            'id="xs-controllers-links-module-AppModule-a551943ac83b92229a16ec9c7a4882e6e4f0ab8981b463e847ba038646f48b632a3a98fc05615ee29a7dba5185ca53f68a1eacc2e3046abd40043e7819e25f12"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a551943ac83b92229a16ec9c7a4882e6e4f0ab8981b463e847ba038646f48b632a3a98fc05615ee29a7dba5185ca53f68a1eacc2e3046abd40043e7819e25f12"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a551943ac83b92229a16ec9c7a4882e6e4f0ab8981b463e847ba038646f48b632a3a98fc05615ee29a7dba5185ca53f68a1eacc2e3046abd40043e7819e25f12"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a551943ac83b92229a16ec9c7a4882e6e4f0ab8981b463e847ba038646f48b632a3a98fc05615ee29a7dba5185ca53f68a1eacc2e3046abd40043e7819e25f12"' :
                                        'id="xs-injectables-links-module-AppModule-a551943ac83b92229a16ec9c7a4882e6e4f0ab8981b463e847ba038646f48b632a3a98fc05615ee29a7dba5185ca53f68a1eacc2e3046abd40043e7819e25f12"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateCategoryUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateCategoryUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateOrderUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateOrderUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreatePaymentOrderUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePaymentOrderUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateProductUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProductUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteCategoryUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteCategoryUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteProductUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteProductUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GetAllCategoryUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetAllCategoryUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GetAllProductUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetAllProductUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GetAllUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetAllUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GetCategoryUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetCategoryUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GetPaymentOrderUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetPaymentOrderUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GetProductUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetProductUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GetQueueOrderUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetQueueOrderUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GetUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaHelper.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaHelper</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateCategoryUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCategoryUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateOrderStatusDeliveredUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateOrderStatusDeliveredUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateOrderStatusPreparationUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateOrderStatusPreparationUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateOrderStatusReadyUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateOrderStatusReadyUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateProductsUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateProductsUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateUserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateUserUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCategoryDTO.html" data-type="entity-link" >CreateCategoryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDTO.html" data-type="entity-link" >CreateOrderDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDTO.html" data-type="entity-link" >CreateProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product-1.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDTO.html" data-type="entity-link" >UpdateCategoryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderProductsDTO.html" data-type="entity-link" >UpdateOrderProductsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDTO.html" data-type="entity-link" >UpdateProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDTO.html" data-type="entity-link" >UpdateUserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoryRepository.html" data-type="entity-link" >CategoryRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateCategoryUseCase.html" data-type="entity-link" >CreateCategoryUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateOrderUseCase.html" data-type="entity-link" >CreateOrderUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreatePaymentOrderUseCase.html" data-type="entity-link" >CreatePaymentOrderUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateProductUseCase.html" data-type="entity-link" >CreateProductUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserUseCase.html" data-type="entity-link" >CreateUserUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteCategoryUseCase.html" data-type="entity-link" >DeleteCategoryUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteProductUseCase.html" data-type="entity-link" >DeleteProductUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteUserUseCase.html" data-type="entity-link" >DeleteUserUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetAllCategoryUseCase.html" data-type="entity-link" >GetAllCategoryUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetAllProductUseCase.html" data-type="entity-link" >GetAllProductUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetAllUserUseCase.html" data-type="entity-link" >GetAllUserUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetCategoryUseCase.html" data-type="entity-link" >GetCategoryUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetPaymentOrderUseCase.html" data-type="entity-link" >GetPaymentOrderUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetProductUseCase.html" data-type="entity-link" >GetProductUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetQueueOrderUseCase.html" data-type="entity-link" >GetQueueOrderUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetUserUseCase.html" data-type="entity-link" >GetUserUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MercadoPagoProvider.html" data-type="entity-link" >MercadoPagoProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderRepository.html" data-type="entity-link" >OrderRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentRepository.html" data-type="entity-link" >PaymentRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaHelper.html" data-type="entity-link" >PrismaHelper</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductRepository.html" data-type="entity-link" >ProductRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateCategoryUseCase.html" data-type="entity-link" >UpdateCategoryUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateOrderProductsUseCase.html" data-type="entity-link" >UpdateOrderProductsUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateOrderStatusDeliveredUseCase.html" data-type="entity-link" >UpdateOrderStatusDeliveredUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateOrderStatusPreparationUseCase.html" data-type="entity-link" >UpdateOrderStatusPreparationUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateOrderStatusReadyUseCase.html" data-type="entity-link" >UpdateOrderStatusReadyUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateProductsUseCase.html" data-type="entity-link" >UpdateProductsUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateUserUseCase.html" data-type="entity-link" >UpdateUserUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICategory.html" data-type="entity-link" >ICategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOrder.html" data-type="entity-link" >IOrder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPayment.html" data-type="entity-link" >IPayment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaymentProvider.html" data-type="entity-link" >IPaymentProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProduct.html" data-type="entity-link" >IProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});