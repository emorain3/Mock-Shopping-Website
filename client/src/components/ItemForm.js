import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


let FormStyled = styled.div`
    position: fixed;
    // background-color: khaki;
    
    margin-top: 2vw;
    margin-right: 1vw;
    width: 10vw;
    box-shadow: 1px 1px 1px grey;
`


class ItemForm extends Component {

    state = {
        name: '',
        description: '',
        image_url: '',
        category: '',
        price: '',
      };

      onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }


      handleSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {name, description, image_url, category, price} = this.state;

        axios.post('/api/america/admin/', {name, description, image_url, category, price} )
          .then((result) => {
            console.log("successful delivery!")
          });
      }


    render() {
        const {name, description, image_url, category, price} = this.state;
        return (
            <FormStyled>
                <form onSubmit={this.handleSubmit} method="post">
                        <div class="field">
                            <label class="label" for="name">Name: </label>
                            <input onChange={this.onChange} value={name} class="input" name="name" id="i_name" placeholder="What is the name of this item?"/>
                        </div>

                        <div class="field">
                            <label class="label" for="description">Item Description: </label>
                            <input onChange={this.onChange} value={description} class="input" name="description" id="i_name" placeholder="describe this item..."/>
                        </div>

                        <div class="field">
                            <label class="label" for="image_url"> Image URL:  </label>
                            <input onChange={this.onChange} value={image_url} class="input" name="image_url" id="i_image" placeholder="What is the name of this item?"/>
                        </div>
                        
                        <div class="field">
                            <label class="label" for="category"> Category  </label>
                            <input onChange={this.onChange} value={category} class="input" name="category" id="i_image" placeholder="Select a category..."/>
                        </div>
                        
                        <div class="field">
                            <label class="label" for="price"> Price  </label>
                            <input onChange={this.onChange} value={price} class="input" name="price" id="i_image" placeholder="$$$"/>
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