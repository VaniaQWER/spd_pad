/*
 * @Author: yuwei 盘点列表 - 药品信息
 * @Date: 2018-09-08 01:08:43 
* @Last Modified time: 2018-09-08 01:08:43 
 */

import React, { PureComponent } from 'react';
import { NavBar, Icon , SearchBar , Tabs ,  Modal , Flex , Card , InputItem , Button} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import ListViewScroll from '../../components/listViewScroll';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { _local } from '../../api/local'
const alert = Modal.alert;
function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '未提交' },
  { title: '已提交' }
];

class Stock extends PureComponent {

  state = {
    url: '',
    searchName: '',
  }

  clickTab = (tab,index)=>{
    console.log(tab,index)
  }

  toDetail = (isDisable)=>{
    const { history } = this.props;
    if(isDisable){
      history.push('/inventory/detail')
    }else{
      history.push('/inventory/detail/false')
    }
  }
  render() {
    const { getFieldProps } = this.props.form;
    const { history } = this.props;
    const { searchName } = this.state;
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="light"
          leftContent={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>,
          ]}
          onLeftClick={() => history.go(-1)}
          >药品信息</NavBar>

        {/* 搜索栏 */}
        <SearchBar
          placeholder="商品名/生产厂家/货位"
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          onChange={this.onChange}
        />
        {/* tab页切栏 */}
        <StickyContainer>
          <Tabs 
            tabs={tabs}
            initalPage={'t1'}
            renderTabBar={renderTabBar}
            onTabClick={this.clickTab}
            >
                <ListViewScroll 
                  url={`${_local}/inventory1`}
                  queryParams={{
                    searchParam: searchName
                  }}
                  method="GET"
                  item={item => {
                    console.log(item)
                    return (
                      <Card  full  className='scrollList-item' key={item.id}>
                        <Card.Header
                          title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                          extra={<span className='fr'>未提交</span>}
                        />
                        <Card.Body>
                          <Flex>
                            <Flex.Item>单位 :<span>{item.distributionNo}</span></Flex.Item>
                            <Flex.Item>货位 :<span>{item.distributionNo}</span></Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item>
                            {
                              item.index===1?
                              (
                                <InputItem
                                  {...getFieldProps('number')}
                                  type="number"
                                >数量 :</InputItem>
                              ):<p>数量 :<span>200</span></p>
                            }
                            </Flex.Item>
                            <Flex.Item>规格 :<span>25ml:1.25g</span></Flex.Item>
                          </Flex>
                          
                          {
                            item.index===1?
                            (
                              <div>
                                <Flex>
                                  <Flex.Item>
                                      <InputItem
                                        {...getFieldProps('number')}
                                        type="number"
                                      >生产日期 :</InputItem>
                                  </Flex.Item>
                                  <Flex.Item>
                                    <InputItem
                                      {...getFieldProps('number')}
                                      type="number"
                                    >生产批号 :</InputItem>
                                  </Flex.Item>
                                </Flex>
                                <Flex>
                                  <Flex.Item>
                                      <InputItem
                                        {...getFieldProps('number')}
                                        type="number"
                                      >有效期至 :</InputItem>
                                  </Flex.Item>
                                  <Flex.Item>生产厂家 :<span>浙江安宝药业有限公司</span></Flex.Item>
                                </Flex>
                              </div>
                            ):null
                          }
                          <hr className='hr'/>
                          <Flex justify='end'>
                            <Button inline  size="small" className='button-gap'>{item.index===1?`收起编辑`:`展开编辑`}</Button>
                            <Button inline  size="small" className='button-gap' onClick={this.toDetail}>更多详情</Button>
                            <Button inline  size="small" className='button-gap' type="primary"
                              onClick={() =>
                                alert('确认提交', '是否执行此操作??', [
                                  { text: '否', onPress: () => console.log('cancel') },
                                  { text: '是', onPress: () => console.log('ok')},
                                ])
                              }>提交</Button>
                          </Flex>
                        </Card.Body>
                      </Card>
                    )
                  }}
                />
                <ListViewScroll 
                  url={`${_local}/inventory2`}
                  queryParams={{
                    searchParam: searchName
                  }}
                  method="GET"
                  item={item => {
                    console.log(item)
                    return (
                      <Card  full  className='scrollList-item' key={item.id} onClick={()=>this.toDetail(false)}>
                        <Card.Header
                          title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                          extra={<span className='fr'>已提交</span>}
                        />
                        <Card.Body>
                          <Flex>
                            <Flex.Item>单位 :<span>{item.distributionNo}</span></Flex.Item>
                            <Flex.Item>货位 :<span>{item.date}</span></Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item>数量 :<span>{item.total}</span></Flex.Item>
                            <Flex.Item>规格 :<span>25ml:1.25g</span></Flex.Item>
                          </Flex>
                        </Card.Body>
                      </Card>
                    )
                  }}
                />
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}

export default connect(state => state)(createForm()(Stock));