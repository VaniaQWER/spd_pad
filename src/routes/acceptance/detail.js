/*
 * @Author: wwb 
 * @Date: 2018-09-07 18:47:11 
 * @Last Modified by: wwb
 * @Last Modified time: 2018-09-07 23:39:22
 * 
 * 验收详情
 */


import React, { PureComponent } from 'react';
import { NavBar, Icon, WhiteSpace, List, Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'dva';

const Item = List.Item;

const RuleItem = ({ form, index }) => {
  const { getFieldProps } = form;
  return (
    <div>
      <Item multipleLine>
        <InputItem {...getFieldProps(`lot_${index}`)} >
          生产批号
        </InputItem>
      </Item>
      <Item multipleLine>
        <InputItem {...getFieldProps(`num_${index}`)} >
          实到数量
        </InputItem>
      </Item>
      <WhiteSpace size='sm'/>
    </div>
  )
}

class AcceptanceDetail extends PureComponent {
  state = {
    detailsData: {},
    amount: 0, // 添加批次
    index: ''
  }
  componentWillMount = () =>{
    const { id, index } = this.props.match.params;
    this.props.dispatch({
      type:'base/getDetail',
      payload: { id },
      callback:(data)=>{
        this.setState({ detailsData: data, index });
      }
    });
  }
  addApprovelNo = () =>{
   let { amount } = this.state;
   let newAmount = amount + 1;
   this.setState({ amount: newAmount });
  }
  _createItem = num => {
    let items = [];
    for (let i = 0; i < num; i++) {
      items.push(<RuleItem  form={this.props.form}  key={i} index={i} />)
    }
    return items;
  }
  render() {
    const { history, form } = this.props;
    const { index, detailsData, amount } = this.state;
    console.log(amount,'ss')
    return (
      <div>
        {/* <div className='ysysnt_detail_content'>
          <ActivityIndicator animating={animating} text='正在努力加载中......'/>
        </div> */}
        <NavBar
          mode="light"
          leftContent ={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>
          ]}
          onLeftClick={() => console.log('onLeftClick')}
          >
          验收详情
        </NavBar>
        <WhiteSpace size="sm"/>
        <NavBar
          mode="light"
          leftContent ={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">上一个</span>
          ]}
          rightContent={[
            <span key="0">下一个</span>,
            <Icon key="1" type="right" />,
          ]}
          >
          <span>{index}</span>/12
        </NavBar>
        <WhiteSpace size="sm"/>
        <List className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => console.log('sdfsfd')}>单据信息</Item>
        </List>
          <WhiteSpace size="sm"/>
        <List>
          <Item multipleLine style={{ fontWeight: 'bold' }}>产品信息</Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>通用名称</div>
              <div className='list-item-info'>{ detailsData.ctmmGenericName }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>商品名</div>
              <div className='list-item-info'>{ detailsData.ctmmTradeName }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>规格</div>
              <div className='list-item-info'>{ detailsData.ctmmSpecification }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>剂型</div>
              <div className='list-item-info'>{ detailsData.ctmmDosageFormDesc }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>生产厂家</div>
              <div className='list-item-info'>{ detailsData.ctmmManufacturerName }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>批准文号</div>
              <div className='list-item-info'>{ detailsData.approvalNo }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>包装规格</div>
              <div className='list-item-info'>{ detailsData.packageSpecification }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>单位</div>
              <div className='list-item-info'>{ detailsData.replanUnit }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>生产批号</div>
              <div className='list-item-info'>{ detailsData.lot }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>生产日期</div>
              <div className='list-item-info'>{ detailsData.productDate }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>有效期至</div>
              <div className='list-item-info'>{ detailsData.validEndDate }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>验收温度（℃）</div>
              <div className='list-item-info'>{ detailsData.realAcceptanceTemperature }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>配送数量</div>
              <div className='list-item-info'>{ detailsData.realDeliveryQuantiry }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>实到数量</div>
              <div className='list-item-info'>{ detailsData.realReceiveQuantity }</div>
            </div>
          </Item>
          <Item multipleLine>
            <div className='list-item'>
              <div className='list-item-label'>供应商</div>
              <div className='list-item-info'>{ detailsData.supplierName }</div>
            </div>
          </Item>
        </List>
        <WhiteSpace size="sm"/>
        {
          this._createItem(amount)
        }
        <List className="my-list">
          <Item className='list-center-item' onClick={this.addApprovelNo}>
            + 添加批次
          </Item>
        </List>
        <div style={{ paddingTop: 70,paddingBottom: 16 }}>
          <Button type='primary'>确认验收</Button>
        </div>
        
      </div>
    )
  }
}

export default connect(state => state)( createForm()(AcceptanceDetail)) ;
