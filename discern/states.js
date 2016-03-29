/*
 * todo : why is everything inside menuContent ?
 * */
appModule
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        // $state.go('home',{},{location:'replace'});
            .state('app', {
                url: "/app",
                cache: false,
                abstract: true,
                templateUrl: "modules/menu/menu.html",
                controller: 'AppCtrl'
            })
            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent': {
                        templateUrl: "modules/static/static.html",
                        controller: "StaticCtrl",
                        resolve: {
                            staticTemplate: ['StaticService', function(staticService) {
                                return staticService.getTemplate("http://discern.pro-digi.co.in/gitdiscern/login_out/page-detail.json?nid=17").then(function(response) {
                                    staticService.template = response.data[0].Body;
                                })
                            }]
                        }
                    }
                }
            })
            .state('app.faq', {
                url: "/faq",
                views: {
                    'menuContent': {
                        templateUrl: "modules/static/static.html",
                        controller: "StaticCtrl",
                        resolve: {
                            staticTemplate: ['StaticService', function(staticService) {
                                return staticService.getTemplate("http://discern.pro-digi.co.in/gitdiscern/login_out/page-detail.json?nid=18").then(function(response) {
                                    staticService.template = response.data[0].Body;
                                });
                            }]
                        }
                    }
                }
            })
            .state('app.tos', {
                url: "/tos",
                views: {
                    'menuContent': {
                        templateUrl: "modules/static/static.html",
                        controller: "StaticCtrl",
                        resolve: {
                            staticTemplate: ['StaticService', function(staticService) {
                                return staticService.getTemplate("http://discern.pro-digi.co.in/gitdiscern/login_out/page-detail.json?nid=364").then(function(response) {
                                    staticService.template = response.data[0].Body;
                                });
                            }]
                        }
                    }
                }
            })
            // .state('app.me', {
            //     url: "/me",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/me.html"
            //         }
            //     }
            // })
            .state('app.cart', {
                url: "/cart",
                views: {
                    'menuContent': {
                        templateUrl: "modules/cart/cart.html",
                        controller: "CartCtrl",
                        resolve: {
                            cartSummary: ['CartService', function(cartService) {
                                return cartService.getCartSummary(url.getCart)
                            }]
                        }
                    }
                }
            })
            .state('app.address', {
                url: "/address",
                views: {
                    'menuContent': {
                        templateUrl: "modules/cart/address/address.html",
                        controller: "addressCtrl",
                        resolve: {
                            alladdress: ['CartService', function(cartService) {
                                return cartService.savedAddress()
                            }]
                        }
                    }
                }
            })
            .state('app.addaddress', {
                url: "/addaddress",
                views: {
                    'menuContent': {
                        templateUrl: "modules/cart/address/addAddress.html",
                        controller: "addAddressCtrl"
                    }
                }
            })
            .state('app.editaddress', {
                url: "/addaddress?profileId&name&email&company&mobile&state&city&address&zip",
                views: {
                    'menuContent': {
                        templateUrl: "modules/cart/address/addAddress.html",
                        controller: "editAddressCtrl"
                    }
                }
            })

        .state('app.billingAddress', {
                url: "/billingAddress",
                views: {
                    'menuContent': {
                        templateUrl: "modules/cart/billingAddress.html",
                        controller: "CartCtrl",
                        resolve: {
                            cartSummary: ['CartService', function(cartService) {
                                return cartService.getCartSummary(url.getCart)
                            }]
                        }

                    }
                }
            })
            .state('app.payment', {
                url: "/payment",
                views: {
                    'menuContent': {
                        templateUrl: "modules/cart/payment/payment.html",
                        controller: "CartCtrl",
                        resolve: {
                            cartSummary: ['CartService', function(cartService) {
                                return cartService.getCartSummary(url.getCart)
                            }]
                        }

                    }
                }
            })
            .state('app.thankyou', {
                url: "/thankyou",
                views: {
                    'menuContent': {
                        templateUrl: "modules/cart/payment/thankyou.html",
                        controller: "CartCtrl",
                        resolve: {
                            cartSummary: ['CartService', function(cartService) {
                                return cartService.getCartSummary(url.getCart)
                            }]
                        }

                    }
                }
            })
            .state('app.looks-landing', {
                url: "/looks-landing?spaceVal&styleVal",
                views: {
                    'menuContent': {
                        templateUrl: "modules/looks/landing/looks-landing.html",
                        controller: 'looksLandingCtrl'
                    }
                }
            })
            .state('app.looks-detail', {
                url: "/looks-detail?spaceVal&styleVal&nid",
                views: {
                    'menuContent': {
                        templateUrl: "modules/looks/detail/looks-detail.html",
                        controller: 'looksDetailCtrl'
                    }
                }
            })
            .state('app.looks', {
                url: "/looks",
                views: {
                    'menuContent': {
                        templateUrl: "modules/looks/looks.html",
                        controller: 'looksCtrl'
                    }
                }
            })
            // .state('app.checkout', {
            //     url: "/checkout",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/checkout.html"
            //         }
            //     }
            // })
            // .state('app.payment', {
            //     url: "/payment",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/payment.html"
            //         }
            //     }
            // })
            .state('app.discover', {
                url: "/discover",
                views: {
                    'menuContent': {
                        templateUrl: "modules/discover/discover.html",
                        controller: 'discoverCtrl'
                    }
                }
            })
            // field_product_space_tid[]=77&field_persona_tid[]=35&field_persona_tid[]=36"
            .state('app.discover-product', {
                url: "/discover-product?spaceVal",
                views: {
                    'menuContent': {
                        templateUrl: "modules/discover/discover-product.html",
                        controller: 'discoverProductCtrl'
                    }
                }
            })
            // .state('app.discover-interior', {
            //     url: "/discover-interior",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/discover-interior.html"
            //         }
            //     }
            // })
            // .state('app.circle', {
            //     url: "/circle",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/circle.html"
            //         }
            //     }
            // })
            // .state('app.filter-stock', {
            //     url: "/filter-stock",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/filter-stock.html"
            //         }
            //     }
            // })
            // .state('app.filter-price', {
            //     url: "/filter-price",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/filter-price.html"
            //         }
            //     }
            // })
            .state('app.filter-color', {
                url: "/filter-color",
                views: {
                    'menuContent': {
                        templateUrl: "modules/search/filter-color.html"
                    }
                }
            })

        // http://10.20.2.182/discernlive/discern/product/products?combine=prod
        // .state('app.filter-option', {
        //         url: "/filter-option",
        //         views: {
        //             'menuContent': {
        //                 templateUrl: "templates/filter-option.html"
        //             }
        //         }
        //     })
            // .state('app.search-result', {
            //     url: "/search-result",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/search-result.html"
            //         }
            //     }
            // })
            .state('app.search1', {
                url: "/search?combine",
                views: {
                    'menuContent': {
                        templateUrl: "modules/search/search.html",
                        controller: 'searchCtrl'
                    }
                }
            })


        .state('app.search-result', {
                url: "/search-result2?combine",
                views: {
                    'menuContent': {
                        templateUrl: "modules/search/search-result.html",
                        controller: 'searchResultCtrl2'
                    }
                }
            })
            .state('app.search-result2', {
                url: "/search-result2?tid",
                views: {
                    'menuContent': {
                        templateUrl: "modules/search/search-result.html",
                        controller: 'searchResultCtrl2'
                    }
                }
            })
            .state('app.search-result3', {
                url: "/search-result2?sortVal",
                views: {
                    'menuContent': {
                        templateUrl: "modules/search/search-result.html",
                        controller: 'searchResultCtrl'
                    }
                }
            })
            .state('app.search-result4', {
                url: "/search-result2?spaceVal&styleVal",
                views: {
                    'menuContent': {
                        templateUrl: "modules/search/search-result.html",
                        controller: 'searchResultCtrl2'
                    }
                }
            })
            // .state('app.shop-for', {
            //     url: "/shop-for",
            //     views: {
            //         'menuContent': {
            //             templateUrl: "templates/shop-for.html"
            //         }
            //     }
            // })
            .state('app.discover-result', {
                url: "/discover-result",
                views: {
                    'menuContent': {
                        templateUrl: "modules/discover/discover-result.html",
                        controller: 'productCtrl'
                    }
                }
            })

        .state('app.product-detail', {
            url: "/product-detail?product_id",
            views: {
                'menuContent': {
                    templateUrl: "modules/products/product-detail.html",
                    controller: 'productDetailCtrl'
                }
            }
        })

        .state('app.model-says', {
            url: "/model-says?nid",
            views: {
                'menuContent': {
                    templateUrl: "modules/celebrity/model-says.html",
                    controller: 'celebrityCtrl'
                }
            }
        })


        // .state('app.filterFeed', {
        //     url: "/filterFeed",
        //     views: {
        //         'menuContent': {
        //             templateUrl: "templates/filter-color.html",
        //             controller: 'filterCtrl'
        //         }
        //     }
        // })

        .state('app.feed', {
            url: "/feed",
            views: {
                'menuContent': {
                    templateUrl: "modules/feed/feed.html",
                    controller: 'feedCtrl'
                }
            }
        })

        // .state('app.single', {
        //         url: "/playlists/:playlistId",
        //         views: {
        //             'menuContent': {
        //                 templateUrl: "templates/playlist.html",
        //                 controller: 'PlaylistCtrl'
        //             }
        //         }
        //     })
            .state('app.projects-landing', {
                url: "/project-landing",
                views: {
                    'menuContent': {
                        templateUrl: "modules/projects/landing.html",
                        controller: 'projectLandingCtrl'
                    }
                }
            })
            .state('app.projects', {
                url: "/project/:id",
                views: {
                    'menuContent': {
                        templateUrl: "modules/projects/project.html",
                        controller: 'projectCtrl',
                        resolve: {
                            landing: ['ProjectService', '$stateParams', function(projectService, $stateParams) {
                                projectService.initFlags($stateParams.id);
                                switch ($stateParams.id) {
                                    case "77":
                                        projectService.isLiving = true;
                                        break;
                                    case "78":
                                        projectService.isDine = true;
                                        break;
                                    case "79":
                                        projectService.isBed = true;
                                        break;
                                    case "1":
                                        projectService.isAll = true;
                                        break;
                                }
                            }],
                            products: ['ProjectService', '$stateParams', function(projectService, $stateParams) {
                                return projectService.setProducts($stateParams.id);
                            }],
                            look: ['ProjectService', '$stateParams', function(projectService, $stateParams) {
                                return projectService.setLooks($stateParams.id);
                            }]
                        }
                    }
                }
            })
            .state('app.projects-visualizer', {
                url: "/project-visualizer/:type",
                views: {
                    'menuContent': {
                        templateUrl: "modules/projects/visualizer/visualizer.html",
                        controller: 'projectVisualizerCtrl',
                        resolve: {
                            chairs: ['ProjectService', '$stateParams', 'UtilityService', function(projectService, $stateParams, utilityService) {
                                projectService.type = $stateParams.type;
                                projectService.getItems(urlProject.chairs, {
                                    params: {
                                        uid_raw: utilityService.getUserInfo().uid,
                                        field_user_proj_prod_space_tid: typeof $stateParams.type !== "undefined" ? $stateParams.type : ""
                                    }
                                }).then(function(response) {
                                    projectService.trimContent(projectService.chairs = response.data, "chairs");
                                });
                            }],
                            sofa: ['ProjectService', '$stateParams', 'UtilityService', function(projectService, $stateParams, utilityService) {
                                return projectService.getItems(urlProject.sofa, {
                                    params: {
                                        uid_raw: utilityService.getUserInfo().uid,
                                        field_user_proj_prod_space_tid: typeof $stateParams.type !== "undefined" ? $stateParams.type : ""
                                    }
                                }).then(function(response) {
                                    projectService.trimContent(projectService.sofa = response.data, "sofa");
                                });
                            }],
                            beds: ['ProjectService', '$stateParams', 'UtilityService', function(projectService, $stateParams, utilityService) {
                                return projectService.getItems(urlProject.beds, {
                                    params: {
                                        uid_raw: utilityService.getUserInfo().uid,
                                        field_user_proj_prod_space_tid: typeof $stateParams.type !== "undefined" ? $stateParams.type : ""
                                    }
                                }).then(function(response) {
                                    projectService.trimContent(projectService.beds = response.data, "beds");
                                });
                            }],
                            tables: ['ProjectService', '$stateParams', 'UtilityService', function(projectService, $stateParams, utilityService) {
                                return projectService.getItems(urlProject.tables, {
                                    params: {
                                        uid_raw: utilityService.getUserInfo().uid,
                                        field_user_proj_prod_space_tid: typeof $stateParams.type !== "undefined" ? $stateParams.type : ""
                                    }
                                }).then(function(response) {
                                    projectService.trimContent(projectService.tables = response.data, "tables");
                                });
                            }],
                            decor: ['ProjectService', '$stateParams', 'UtilityService', function(projectService, $stateParams, utilityService) {
                                return projectService.getItems(urlProject.decor, {
                                    params: {
                                        uid_raw: utilityService.getUserInfo().uid,
                                        field_user_proj_prod_space_tid: typeof $stateParams.type !== "undefined" ? $stateParams.type : ""
                                    }
                                }).then(function(response) {
                                    projectService.trimContent(projectService.decor = response.data, "decor");
                                });
                            }],
                            lighting: ['ProjectService', '$stateParams', 'UtilityService', function(projectService, $stateParams, utilityService) {
                                return projectService.getItems(urlProject.lighting, {
                                    params: {
                                        uid_raw: utilityService.getUserInfo().uid,
                                        field_user_proj_prod_space_tid: typeof $stateParams.type !== "undefined" ? $stateParams.type : ""
                                    }
                                }).then(function(response) {
                                    projectService.trimContent(projectService.lighting = response.data, "lighting");
                                });
                            }],
                            rugs: ['ProjectService', '$stateParams', 'UtilityService', function(projectService, $stateParams, utilityService) {
                                return projectService.getItems(urlProject.rugs, {
                                    params: {
                                        uid_raw: utilityService.getUserInfo().uid,
                                        field_user_proj_prod_space_tid: typeof $stateParams.type !== "undefined" ? $stateParams.type : ""
                                    }
                                }).then(function(response) {
                                    projectService.trimContent(projectService.rugs = response.data, "rugs");
                                });
                            }],
                            textiles: ['ProjectService', '$stateParams', 'UtilityService', function(projectService, $stateParams, utilityService) {
                                return projectService.getItems(urlProject.textiles, {
                                    params: {
                                        uid_raw: utilityService.getUserInfo().uid,
                                        field_user_proj_prod_space_tid: typeof $stateParams.type !== "undefined" ? $stateParams.type : ""
                                    }
                                }).then(function(response) {
                                    projectService.trimContent(projectService.textiles = response.data, "textiles");
                                });
                            }]
                        }
                    }
                }
            })
            .state('app.projects-detail', {
                url: "/project-detail/:nid",
                views: {
                    'menuContent': {
                        templateUrl: "modules/projects/details/detail.html",
                        controller: 'projectDetailCtrl',
                        resolve: {
                            detail: ['ProjectService', '$stateParams', function(projectService, $stateParams) {
                                return projectService.getDetails(urlProject.detail, {
                                    nid: $stateParams.nid
                                });
                            }]
                        }
                    }
                }
            });
        //      .state('app.login', {
        //     url: "/login",
        //     views: {
        //         'menuContent': {
        //             templateUrl: "templates/login.html"

        //         }
        //     }
        // });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/feed');
    });
