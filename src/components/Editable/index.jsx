import { Component } from "react";
const buttonStatusConstants={
    save:'SAVE',
    edit:'EDIT'
}
class Editable extends Component{
    state={
        inputText:'',
        buttonStatus:buttonStatusConstants.save
    }
    onChangeInput=(event)=>{
        this.setState({inputText:event.target.value})
    }
    onSave=()=>{
        this.setState({buttonStatus:buttonStatusConstants.edit})
    }
    onEdit=()=>{
        this.setState({buttonStatus:buttonStatusConstants.save})
    }
    renderSave=()=>{
        const {inputText}=this.state
        return(
            <div className="in-container">
                <input type="text" value={inputText} onChange={this.onChangeInput}/>
                <button type="button" className="button" onClick={this.onSave}>Save</button>
            </div>
        )
    }
    renderEdit=()=>{
        const {inputText}=this.state
        return(
            <div className="in-container">
                <p className="para">{inputText}</p>
                <button type="button" className="button" onClick={this.onEdit}>Edit</button>
            </div>
        )
    }
    render(){
        const {buttonStatus}=this.state
        return(
            <div className="bg-container">
                <div className="text-container">
                    <h1 className="heading">Editable Text Input</h1>
                {buttonStatus===buttonStatusConstants.save?
                this.renderSave()
                :this.renderEdit()
                }
                </div>
            </div>
        )
    }
}
export default Editable