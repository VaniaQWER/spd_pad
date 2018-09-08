/*
 * @Author: yuwei 盘点列表
 * @Date: 2018-09-08 11:21:09 
* @Last Modified time: 2018-09-08 11:21:09 
 */

import React, { PureComponent } from 'react';
import { NavBar, Icon , Flex , Modal, List, Button, Tag , InputItem , DatePicker, Card} from 'antd-mobile';
import ListViewScroll from '../../components/listViewScroll';
import { _local } from '../../api/local'
const alert = Modal.alert;
class Invertory extends PureComponent {

  state = {
    url: '',
    searchName: '',
    modal: false
  }
  toDetail = (id)=>{
    const { history } = this.props;
    history.push('/inventory/listInfo')
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onChange= (selected)=>{
    console.log(selected)
  }
  render() {
    const { searchName } = this.state;
    const { history } = this.props;
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="dark"
          leftContent={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>,
          ]}
          rightContent={(
            <span key="2" onClick={this.showModal('modal')}>新建盘点</span>
          )}
          onLeftClick={() => history.go(-1)}
          onRig
          >盘点</NavBar>

        {/* tab页切栏 */}
        <div style={{height:'70vh' , backgroundColor: '#fff' }}>
          <h3 className='scrollList-title'>盘点记录</h3>
          <ul className='scrollList'>
              <ListViewScroll 
                url={`${_local}/inventory1`}
                queryParams={{
                  searchParam: searchName
                }}
                method="GET"
                item={item => {
                  return (
                    <Card  full className='scrollList-item' onClick={this.toDetail}>
                      <Card.Header
                        title={<span style={{ fontSize: 16, color: '#333',fontWeight: 'bold' }}>盘点单号：{item.distributionNo}</span>}
                        extra={<span>明盘全盘   草稿</span>}
                      />
                      <Card.Body>
                        <Flex>
                          <Flex.Item>制单时间 :<span>{item.date }</span></Flex.Item>
                          <Flex.Item>制单 :<span>{item.distributionNo}</span></Flex.Item>
                        </Flex>
                        <Flex>
                          <Flex.Item>盘点时间 :<span>{item.date}</span></Flex.Item>
                        </Flex>
                      </Card.Body>
                    </Card>
                  )
                }}
              />
          </ul>
        </div>

        <Modal
          popup
          visible={this.state.modal}
          onClose={()=>this.setState({modal:false})}
          animationType="slide-up"
          >
            <div className='grid'>
              <div className='grid-gap'>
                <span className='grid-label'>盘点类型:</span>
                <Tag onChange={this.onChange} className='grid-content-inline'>明盘</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>暗盘</Tag>
              </div>
              <div className='grid-gap'>
                <span className='grid-label'></span>
                <Tag onChange={this.onChange} className='grid-content-inline'>全盘</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>动盘</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>动销盘</Tag>
              </div>

              <div className='grid-gap'>
                <span className='grid-label'>药品特征:</span>
                <Tag onChange={this.onChange} className='grid-content-inline'>全部</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>中成药</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>西药</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>大输液</Tag>
              </div>
              <div className='grid-gap'>
                <span className='grid-label'></span>
                <Tag onChange={this.onChange} className='grid-content-inline'>报告药</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>贵重品</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>冷藏</Tag>
                <Tag onChange={this.onChange} className='grid-content-inline'>毒麻药</Tag>
              </div>
              <div className='grid-gap'>
                <span className='grid-label'></span>
                <Tag onChange={this.onChange} className='grid-content-inline'>中草药</Tag>
              </div>

              <div className='grid-gap'>
                <span className='grid-label'>起始时间:</span>
                  <DatePicker
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                  >
                    <List.Item arrow="horizontal">请选择起始时间</List.Item>
                  </DatePicker>
              </div>
              <div className='grid-gap'>
                <span className='grid-label'>备注:</span>
                <InputItem
                  style={{width:'75%'}}
                  type={'text'}
                  placeholder="请输入"
                  clear
                ></InputItem>
              </div>

              <Button type="primary"  onClick={() =>
                alert('确认新建盘点', '是否执行此操作??', [
                  { text: '否', onPress: () => console.log('cancel') },
                  { text: '是', onPress: () =>this.setState({modal:false})},
                ])
              }>确定</Button>
            </div>


        </Modal>
      </div>
    )
  }
}

export default Invertory;