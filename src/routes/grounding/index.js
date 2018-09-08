import React, { PureComponent } from 'react';
import { NavBar, Icon, SearchBar, Tabs, Card, Flex, Button, Modal } from 'antd-mobile';
import { connect } from 'dva';
import { StickyContainer, Sticky } from 'react-sticky';
import { _local } from '../../api/local'
import ListViewScroll from '../../components/listViewScroll';
const alert = Modal.alert;

const renderTabBar = (props)=>{
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
  { title: '待上架' },
  { title: '已上架' },
];

class Grounding extends PureComponent {
  state = {
    url: '',
    searchName: '',
  }
  detail = (id) =>{
    this.props.history.push({ pathname: `/grounding/detail/${id}` })
  }
  passGrounding = () =>{
    alert('确定', '是否确定上架???', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确认', onPress: () => this.props.history.push({ pathname: '/result/success' }) },
    ]);
  }
  render() {
    const { searchName } = this.state;
    const { history } = this.props;
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent ={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>
          ]}
          onLeftClick={() => history.go(-1)}
          >
          药品信息
        </NavBar>
        <SearchBar
          placeholder="通用名/商品名/生产厂家"
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          onChange={this.onChange}
        />
        <StickyContainer>
          <Tabs tabs={tabs}
            initalPage={'t2'}
            renderTabBar={renderTabBar}
          >
            <div className='scrollList'>
              <ListViewScroll 
                url={`${_local}/groundList`}
                queryParams={{
                  searchParam: searchName
                }}
                separator={true}
                method="GET"
                item={item => {
                  return (
                  <Card full className='scrollList-item'>
                    <Card.Header
                      title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                      extra={<span>{'待上架'}</span>}
                    />
                    <Card.Body>
                      <Flex>
                        <Flex.Item> 单位：<span>{item.replanUnit}</span> </Flex.Item>
                        <Flex.Item> 货位：<span>{item.goodPlace}</span> </Flex.Item>
                      </Flex>
                      <Flex>
                        <Flex.Item> 数量：<span>{item.total}</span> </Flex.Item>
                        <Flex.Item> 规格：<span>{item.spec}</span> </Flex.Item>
                      </Flex>
                      <Flex>
                        <Flex.Item> 生产厂家：<span>{item.producter}</span> </Flex.Item>
                      </Flex>
                    </Card.Body>
                    <Card.Footer extra={<div>
                      <Button type='default' size='small' inline onClick={()=> this.detail(item.id)}>更多详情</Button>
                      <Button type='primary' size='small' inline style={{ marginLeft: 8 }} onClick={this.passGrounding}>确认上架</Button>
                    </div>} />
                  </Card>)
                }}
              />
            </div>
            <div className='scrollList'>
              <ListViewScroll 
                url={`${_local}/groundList`}
                queryParams={{
                  searchParam: searchName
                }}
                separator={true}
                method="GET"
                item={item => {
                  return (
                  <Card full className='scrollList-item'>
                    <Card.Header
                      title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                      extra={<span>{'已上架'}</span>}
                    />
                    <Card.Body>
                      <Flex>
                        <Flex.Item> 单位：<span>{item.replanUnit}</span> </Flex.Item>
                        <Flex.Item> 货位：<span>{item.goodPlace}</span> </Flex.Item>
                      </Flex>
                      <Flex>
                        <Flex.Item> 数量：<span>{item.total}</span> </Flex.Item>
                        <Flex.Item> 规格：<span>{item.spec}</span> </Flex.Item>
                      </Flex>
                      <Flex>
                        <Flex.Item> 生产厂家：<span>{item.producter}</span> </Flex.Item>
                      </Flex>
                    </Card.Body>
                    <Card.Footer extra={<div>
                      <Button type='default' size='small' inline>更多详情</Button>
                    </div>} />
                  </Card>)
                }}
              />
            </div>
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}

export default connect(state => state)(Grounding) ;