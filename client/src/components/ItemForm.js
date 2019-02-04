import React, { Component } from 'react';
import styled from 'styled-components';



let FormStyled = styled.div`
    position: fixed;
    // background-color: khaki;
    
    margin-top: 2vw;
    margin-right: 1vw;
    width: 10vw;
    box-shadow: 1px 1px 1px grey;
`


class ItemForm extends Component {
    render() {
        
        return (
            <FormStyled>
                <form action={`http://localhost:3001/api/america/admin`} method="post">
                        <div class="field">
                            <label class="label" for="name">Name: </label>
                            <input class="input" name="name" id="i_name" placeholder="What is the name of this item?"/>
                        </div>

                        <div class="field">
                            <label class="label" for="description">Item Description: </label>
                            <input class="input" name="description" id="i_name" placeholder="describe this item..."/>
                        </div>

                        <div class="field">
                            <label class="label" for="image_url"> Image URL:  </label>
                            <input class="input" name="image_url" id="i_image" placeholder="What is the name of this item?"/>
                        </div>
                        
                        <div class="field">
                            <label class="label" for="category"> Category  </label>
                            <input class="input" name="category" id="i_image" placeholder="Select a category..."/>
                        </div>
                        
                        <div class="field">
                            <label class="label" for="price"> Price  </label>
                            <input class="input" name="price" id="i_image" placeholder="$$$"/>
                        </div>

                        <div class="field">
                            <button class="button is-link" onClick={this.props.updateImages}>Submit </button>
                        </div>
                    </form>
            </FormStyled>
        );
    }
}

export default ItemForm;