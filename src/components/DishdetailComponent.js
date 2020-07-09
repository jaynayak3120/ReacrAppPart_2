import React, { Component }  from 'react';
import { Card, CardImg, CardTitle ,CardBody ,CardText, Breadcrumb, BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody, Label, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

    function RenderDish({dish}) {
        if(dish != null) {
            return(
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
/*        if(dish==null) {
            return(<div></div>);
        }
        else {*/
            //const comments=comments;
            const comm =comments.map((comment) => {
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}
                        &nbsp;,&nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))}</p>
                    </li>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <div className="list-unstyled">{comm}</div>
                    <CommentForm/>
                </div>
            );
        //}
    }

    const minLength = (len) => (val) => !(val) || val.length >= len;
    const maxLength = (len) => (val) => !(val) || val.length <= len;

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            openModal: false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ openModal: !this.state.openModal });
    }
    
    handleSubmit(values) {
        alert('Current State is: '+ JSON.stringify(values));
        console.log('Current State is: '+ JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <div>
                    <Modal isOpen={this.state.openModal} toggle={this.toggleMOdal}>
                        <ModalHeader toggle={this.toggleModal}>
                            <strong>Submit Comment</strong>
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                                <div className="form-group">
                                    <Label htmlFor="rate">Rating</Label>
                                    <Control.select model=".rate" id="rate" name="rate" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </div>
                                <div className="form-group">
                                    <Label htmlFor="author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author" className="form-control"
                                        validators={{
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }} />
                                    <Errors className="text-danger" model=".author" show="touched" 
                                        messages={{
                                        minLength: "Must be greater than 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                        }} />

                                </div>
                                <div className="form-group">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" name="comment" id="comment" rows="8" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <Button className="submit" color="primary">Submit</Button>
                                </div>
                            </LocalForm>            
                        </ModalBody>
                    </Modal>
                </div>
                <Button outline onClick={this.toggleModal} color='tranparent'>
                    <span className="fa fa-pencil"></span> Sumbit Comments
                </Button>
            </div>
        );
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />    
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
        );
}

export default DishDetail;