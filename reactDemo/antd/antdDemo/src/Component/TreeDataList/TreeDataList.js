import React, { Component } from 'react'
import './TreeDataList.css';
import HightComponent from '../HightComponent';
class TreeDataList extends Component {
    static defaultProps = {
        data: 'props'
    }

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    componentWillMount() { 
        console.log('组件加载中');
        let dataList = [
            {
                name: "食物",
                children: [
                    { name: "大米" },
                    { name: "大米1" },
                    { name: "大米2" },
                    { name: "大米3"}
                ]
            },
            {
                name: "水果",
                children: [
                    { name: "苹果" },
                    { name: "香蕉" },
                    { name: "桃子" },
                    { name: "哈密瓜"}
                ]
            }
        ]
        this.setState({
            data:dataList
        })
    }
    checkChild(item,event) { 
        event.preventDefault();
        if (item.check === 'mid' || item.check === 'falses' || !item.check) {
                item.check = 'all';
                if(item.children && item.children.length > 0){
                item.children.map( item1 => item1.check = true)
            }
        } else { 
            item.check = 'falses'
            if(item.children && item.children.length > 0){
                item.children.map(item1 => item1.check = false)
            }
        }
        
         this.setState({})
    }
    checkItem(item, index, event) { 
        event.preventDefault();
        console.log(index);
        item.check = !item.check;
        var count = 0;
        let data = this.state.data[index];
        if(data.children && data.children.length > 0){
            data.children.map( item1 => 
                item1.check? count += 1:''
            )
            if (count > 0 && count < data.children.length) { 
                console.log('mid')
                data.check = 'mid'
            }
            if (count > 0 && count === data.children.length) { 
                data.check = 'all'
            }
            if (count === 0) { 
                data.check = 'falses'
            }
        }
         this.setState({})
    }
    componentDidMount() {
        
    }
    render() {
        console.log(this.state.data);
        let dataList  = this.state.data;
        return (<div className="content">
            {dataList && dataList.length > 0 &&
                dataList.map((item,index) => { 
                return (<ul key={index}>
                    <li>
                        <span> 
                            <i  className={item.check}  onClick={this.checkChild.bind(this,item)}></i>
                            <span style={{verticalAlign:'middle'}}> {item.name}</span>  
                        </span> 
                        {item.children && item.children.length > 0 &&
                            <ul className="item-children" style={{display:item.fold ? 'none':'block'}}>
                                {
                                 item.children.map((item1,index1) => { 
                                    return (
                                        <li key={index1}>
                                            <i className={item1.check ? 'select' : 'unSelect'} onClick={this.checkItem.bind(this,item1,index)}></i>
                                            <span>{item1.name}</span>
                                        </li>)
                                    })
                                }
                            </ul>    
                           
                        }
                    </li>
                </ul>)
                })
            }
        </div>)
    }
}
export default HightComponent(TreeDataList)