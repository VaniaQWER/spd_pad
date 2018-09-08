/*
 * @Author: wwb 
 * @Date: 2018-09-07 18:47:11 
 * @Last Modified by: wwb
 * @Last Modified time: 2018-09-08 10:15:08
 * 
 * 验收详情
 */


import React, { PureComponent } from 'react';
import { NavBar, Icon, WhiteSpace, List, Button, InputItem, Accordion } from 'antd-mobile';
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
    index: this.props.match.params.index,
    disabled: false
  }
  componentWillMount = () =>{
    // const { index } = this.props.match.params;
    // this.setState({ index });
    this.genDetail();
  }
  genDetail = () =>{
    const { id } = this.props.match.params;
    this.props.dispatch({
      type:'base/getDetail',
      payload: { id },
      callback:(data)=>{
        this.setState({ detailsData: data });
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
  showDetail = (type) =>{
    if(Number(this.state.index) >0){
      this.genDetail();
    }
    let { index } = this.state;
    index = type === 'last' ? Number(index) -1: Number(index) + 1;
    if(index === 0){
      this.setState({ disabled: true });
    }
    this.setState({ index: index >=0 ? index: 0 })
  }
  render() {
    const { index, detailsData, amount, disabled } = this.state;
    const { history } = this.props;
    return (
      <div>
        {/* <div className='ysysnt_detail_content'>
          <ActivityIndicator animating={animating} text='正在努力加载中......'/>
        </div> */}
        <NavBar
          mode="dark"
          leftContent ={[
            <a key='0' className='navHeader_btn'>
              <Icon key="0" type="left" style={{ marginRight: '10px' }} />
              <span key="1">返回</span>
            </a>
          ]}
          onLeftClick={() => history.go(-1)}
          >
          验收详情
        </NavBar>
        <WhiteSpace size="sm"/>
        <NavBar
          mode="light"
          leftContent ={[
            <a key='0' className={disabled ? 'navHeader_btn_disabled' : 'navHeader_btn'} onClick={()=>this.showDetail('last')}>
              <Icon key="0" type="left" style={{ marginRight: '10px' }} />
              <span key="1">上一个</span>
            </a>
          ]}
          rightContent={[
            <a key='0' className='navHeader_btn' onClick={()=>this.showDetail('next')}>
              <span key="0">下一个</span>
              <Icon key="1" type="right" />
            </a>
          ]}
          >
          <span>{index}</span>/12
        </NavBar>
        <WhiteSpace size="sm"/>
        <Accordion>
          <Accordion.Panel header={<span style={{ fontWeight: 'bold' }}>单据信息</span>}>
            <List className="my-list">
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>盘点单号</div>
                  <div className='list-item-info'>{ detailsData.pdNo }</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>类型</div>
                  <div className='list-item-info'>{ detailsData.type }</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>部门</div>
                  <div className='list-item-info'>{ detailsData.ctmmGenericName }</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>制单人</div>
                  <div className='list-item-info'>{ detailsData.createUser }</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>制单时间</div>
                  <div className='list-item-info'>{ detailsData.createTime }</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>盘点周期</div>
                  <div className='list-item-info'>{ detailsData.ctmmGenericName }</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>盘点人</div>
                  <div className='list-item-info'>{ detailsData.pdUser }</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>提交时间</div>
                  <div className='list-item-info'>{ detailsData.updateTime }</div>
                </div>
              </Item>
            </List>
          </Accordion.Panel>
        </Accordion>
          <WhiteSpace size="sm"/>
          <Accordion defaultActiveKey={'1'}>
            <Accordion.Panel header={<span style={{ fontWeight: 'bold' }}>产品信息</span>} key={'1'}>
              <List>
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
            </Accordion.Panel>
          </Accordion>
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
