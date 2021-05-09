import { 
    Container, 
    Content,
    H1,
    H2,
    H3,
    Text,
    View, 
 } from 'native-base';
 import {
     ScrollView,
     StyleSheet,
     Image,
 } from "react-native";
//  import { Card } from "react-native-elements";
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { images, COLORS } from "../constants/";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

const ProductDetails = ({ route })=>{
    console.log( "Details", route.params.product);

    const product = route.params.product;
    console.log("----", product.Media[0].FullPath );

    // console.log( "Details -n ", navigation);
    return (
        <>
            <ScrollView>
                <Container style={ styles.mainContainer }>
                    {/* Product Image */}
                    <Container style={ styles.imageContainer }>
                        <SliderBox
                            autoplay={ true } 
                            circleLoop={ true }  
                            images={[
                                product.Media[0].FullPath,
                                // images.staticProduct3,
                                // images.staticProduct4
                            ]}
                            style={ styles.imageShow }
                        />
                    </Container>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.productDetailsContainer }>
                        {/* Product-name */}
                        <View style={ styles.productName }>
                            <Text style={ styles.textStyleTitle }>{ product.productName }</Text>
                        </View>
                        {/* Product-rating */}
                        <View  style={ styles.productRating }>
                            <Text style={ styles.textStyleTitle }>
                                4.5 <AntDesign name="star" style={ styles.textStyleTitle } />
                            </Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    {/* Product-description */}
                    <View style={ styles.productDescription }>
                        <Text style={ styles.textStyleBody }>
                        { product.description }
                        </Text>
                    </View>
                    <View style={{
                        flex: 0.2,
                        // backgroundColor: "blue",
                        flexDirection: "row"
                    }}>
                        {/* Product-price */}
                        <View style={{
                            width: "50%"
                        }}>
                            <Text style={ styles.textStyleTitle }>Rs. { product.price }/-</Text>
                        </View>
                        {/* Product-stock */}
                        <View style={{
                            width: "50%",
                        }}>
                            <Text style={ styles.textStyleTitle }>Qty: { product.stock }</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={{
                        flex: 0.2,
                        // backgroundColor: "blue",
                        flexDirection: "row"
                    }}>
                        {/* Product-category/sub-category */}
                        {/* Product-shop */}
                        <View style={{
                            width: "100%",
                        }}>
                            <Text style={ styles.textStyleTitle }>Shops:</Text>
                            <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                            <View style={{
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}>
                                <TouchableOpacity>
                                    <Text style={{
                                        color: "white",
                                        backgroundColor: COLORS.primary,
                                        margin: 10,
                                        padding: 5,
                                        borderRadius: 5
                                    }}>{ product.Shop.shopName }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{ width: "50%" }}>
                                <TouchableOpacity>
                                    <Text style={{
                                        textAlign: "center",
                                        color: "white",
                                        fontWeight: "bold",
                                        backgroundColor: COLORS.primary,
                                        margin: 10,
                                        padding: 5,
                                        marginHorizontal: 5,
                                        height: 50,
                                        borderRadius: 5,
                                        fontSize: 22
                                    }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "50%" }}>
                                <TouchableOpacity>
                                    <Text style={{
                                        textAlign: "center",
                                        color: "white",
                                        fontWeight: "bold",
                                        backgroundColor: COLORS.primary,
                                        margin: 10,
                                        padding: 5,
                                        marginHorizontal: 5,
                                        height: 50,
                                        borderRadius: 5,
                                        fontSize: 22
                                    }}>Buy now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    {/* Product-reviews */}
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.productDetailsContainer }>
                        {/* Product-reviews-heading */}
                        <View style={ styles.productName }>
                            <Text style={ styles.textStyleTitle }>Reviews</Text>
                        </View>
                    </View>
                    <View style={ styles.reviewStyling }>
                        <View style={ styles.reviewMainContainer }>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    // backgroundColor: "yellow",
                                    width: "29%",
                                }}>
                                    <Image
                                        source={ images.staticProduct4 }
                                        borderRadius={120}
                                        style={{
                                            width: "100%",
                                            height: 100,
                                            marginTop: 10
                                        }}
                                    />
                                </View>
                                <View style={{
                                    width: "71%",
                                    margin: 5
                                }}>
                                    <H1 style={{
                                        color: COLORS.primary,
                                        marginLeft: 10,
                                        fontWeight: "bold"
                                    }}>@Username</H1>
                                    
                                    <H3 style={{
                                        textAlign: "left",
                                        margin: 10,
                                    }}>This is my review about this product.This is my review about this product.This is my review about this product.
                                    </H3>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginLeft: "5%"
                                }}>
                                <TouchableOpacity>
                                    <AntDesign
                                        name="like2"
                                        style={ styles.reviewSecondaryText }
                                    />
                                </TouchableOpacity>
                                <Text style={ styles.reviewSecondaryText }>
                                    15</Text>
                                </View>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <TouchableOpacity>
                                        <AntDesign
                                            name="dislike2"
                                            style={ styles.reviewSecondaryText }
                                        />
                                    </TouchableOpacity>
                                    <Text style={ styles.reviewSecondaryText }>5</Text>
                                </View>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Text style={ styles.reviewSecondaryText }>4.1</Text>
                                    <AntDesign
                                        name="star"
                                        style={ styles.reviewSecondaryText }
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={ styles.reviewMainContainer }>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    // backgroundColor: "yellow",
                                    width: "29%",
                                }}>
                                    <Image
                                        source={ images.staticProduct1 }
                                        borderRadius={120}
                                        style={{
                                            width: "100%",
                                            height: 100,
                                            marginTop: 10
                                        }}
                                    />
                                </View>
                                <View style={{
                                    width: "71%",
                                    margin: 5
                                }}>
                                    <H1 style={{
                                        color: COLORS.primary,
                                        marginLeft: 10,
                                        fontWeight: "bold"
                                    }}>@Username</H1>
                                    
                                    <H3 style={{
                                        textAlign: "left",
                                        margin: 10,
                                    }}>This is my review about this product.This is my review about this product.This is my review about this product.
                                    </H3>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginLeft: "5%"
                                }}>
                                <TouchableOpacity>
                                    <AntDesign
                                        name="like2"
                                        style={ styles.reviewSecondaryText }
                                    />
                                </TouchableOpacity>
                                <Text style={ styles.reviewSecondaryText }>
                                    15</Text>
                                </View>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <TouchableOpacity>
                                        <AntDesign
                                            name="dislike2"
                                            style={ styles.reviewSecondaryText }
                                        />
                                    </TouchableOpacity>
                                    <Text style={ styles.reviewSecondaryText }>5</Text>
                                </View>
                                <View style={{
                                    width: "33%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Text style={ styles.reviewSecondaryText }>4.1</Text>
                                    <AntDesign
                                        name="star"
                                        style={ styles.reviewSecondaryText }
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Container>
            </ScrollView>
            {/* Product-price */}
            {/* Product-stock */}
            {/* Product-category/sub-category */}
            {/* Product-shop */}
        </>
    )
};

export default ProductDetails;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        height: "auto",
        flexWrap: "wrap"
    },
    imageShow: {
        height: 400,
        width: "100%",
    },
    productDetailsContainer: {
        flex: 0.12,
        flexDirection: "row",
        width: "100%",
        height: "100%"
        // backgroundColor: "red",
    },
    imageContainer: {
        flex: 0.4,
        height: "100%",
        width: "100%",
        alignItems: "center",
    },
    productHeader: {
        width: "100%",
    },
    productName: {
        width: "75%",
        // backgroundColor: "blue",
        marginLeft: 10,
        alignSelf: "center"
    },
    productRating: {
        width: "25%",
        // backgroundColor: "green",
        alignSelf: "center",
        fontSize: 35
    },
    textStyleTitle: {
        // textAlign: "center",
        padding: 6,
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.primary
    },
    textStyleBody: {
        padding: 10,
        height: "100%"
    },
    productDescription: {
        flex: 0.3,
        height: "50%"
        // backgroundColor: "black",
        // margin: 5,
        // padding: 10,
    },
    reviewStyling: {
        flex: 0.7,
        height: "auto",
        flexWrap: "nowrap"
    },
    reviewMainContainer: {
        // backgroundColor: COLORS.tabSelectionColor,
        margin: 10,
        padding: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        borderColor: COLORS.tabSelectionColor,
        borderWidth: 2.5,
        borderRadius: 10
    },
    reviewSecondaryText:{
        color: COLORS.primary,
        textAlign: "center",
        fontSize: 25,
        // margin: 2,
        padding: 2
    }
});
