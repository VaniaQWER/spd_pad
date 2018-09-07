/*
 * @Author: yuwei - 盘点详情
 * @Date: 2018-09-08 00:24:06 
* @Last Modified time: 2018-09-08 00:24:06 
 */

import React, { PureComponent } from 'react';
import { Accordion , NavBar, Icon, WhiteSpace, List, Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'dva';
const Item = List.Item;
const RuleItem = ({ form, index }) => {
  const { getFieldProps } = form;
  return (
    <div>
      <Item multipleLine>
        <InputItem {...getFieldProps(`lot_${index}`)} placeholder="请输入" >
          生产批号
        </InputItem>
      </Item>
      <Item multipleLine>
        <InputItem {...getFieldProps(`num_${index}`)} placeholder="请输入" >
         数量
        </InputItem>
      </Item>
      <WhiteSpace size='sm'/>
    </div>
  )
}

class InvertoryDetail extends PureComponent {
  state = {
    detailsData: {},
    amount: 0, // 添加批次
    index: ''
  }
  componentWillMount = () =>{
    // const { id, index } = this.props.match.params;
    // this.props.dispatch({
    //   type:'base/getDetail',
    //   payload: { id },
    //   callback:(data)=>{
    //     this.setState({ detailsData: data, index });
    //   }
    // });
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
    const { index, amount } = this.state;
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
          详情
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
        <Accordion defaultActiveKey="0" className="my-accordion">
          <Accordion.Panel header="单据信息">
            <List className="my-list">
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>盘点单号</div>
                  <div className='list-item-info'>PA002211807000086U</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>类型</div>
                  <div className='list-item-info'>明盘动盘</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>部门</div>
                  <div className='list-item-info'>药库</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>制单人</div>
                  <div className='list-item-info'>李子荣</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>制单时间</div>
                  <div className='list-item-info'>2018-08-08 12:00:00</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>盘点周期</div>
                  <div className='list-item-info'>2018-08-06 11:01:26 ~ 2018-08-08 11:22:20</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>盘点人</div>
                  <div className='list-item-info'></div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>提交时间</div>
                  <div className='list-item-info'></div>
                </div>
              </Item>
            </List>
          </Accordion.Panel>
        </Accordion>
       
        <WhiteSpace size="sm"/>
        <Accordion defaultActiveKey="0" className="my-accordion">
          <Accordion.Panel header="产品信息">
            <List>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>货位</div>
                  <div className='list-item-info'>1231321</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>货位类型</div>
                  <div className='list-item-info'>发药机货位</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>通用名</div>
                  <div className='list-item-info'>注射用复方甘草酸苷</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>规格</div>
                  <div className='list-item-info'>甘草酸苷80mg</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>生产厂家</div>
                  <div className='list-item-info'>浙江安宝药业有限公司</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>包装规格</div>
                  <div className='list-item-info'>80mg*12包</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>单位</div>
                  <div className='list-item-info'>箱</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>账面库存</div>
                  <div className='list-item-info'>100</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>实际数量</div>
                  <div className='list-item-info'>100</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>盈亏数量</div>
                  <div className='list-item-info'>0</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>账面批号</div>
                  <div className='list-item-info'>PH123133</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>实际批号</div>
                  <div className='list-item-info'>PH123133</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>生产日期</div>
                  <div className='list-item-info'>2018-05-06</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>实际生产日期</div>
                  <div className='list-item-info'>2018-05-06</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>有效期至</div>
                  <div className='list-item-info'>2018-05-06</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>实际有效期至</div>
                  <div className='list-item-info'>2018-05-06</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>参考价格</div>
                  <div className='list-item-info'>21.0000</div>
                </div>
              </Item>
              <Item multipleLine>
                <div className='list-item'>
                  <div className='list-item-label'>参考盈亏金额</div>
                  <div className='list-item-info'>0.0000</div>
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
            + 增加批号
          </Item>
        </List>
        <div style={{ paddingTop: 70,paddingBottom: 16 }}>
          <Button type='primary'>确认提交</Button>
        </div>
        
      </div>
    )
  }
}

export default connect(state=>state)(createForm()(InvertoryDetail) );