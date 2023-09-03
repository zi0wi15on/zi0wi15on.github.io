const ap = new APlayer({
    container: document.getElementById('aplayer'),
	showlrc: false,
	autoplay: true,
	fixed: true,
	mini: true,
    theme: '#aeb9bf',
    audio: [
      {
		title: '龙卷风',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXRDVWgwemNicXNkJnBhc3NDb2RlPTR2MHk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '印第安老斑鸠',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUx2Z1IwemNhaWRlJnBhc3NDb2RlPWZqOWk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '伊斯坦堡',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaW00RTcwemNhaG9qJnBhc3NDb2RlPTc1MmM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '星晴',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUVUcmwwemNhaGVqJnBhc3NDb2RlPTZ6ZDc.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '完美主义',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTV3NWswemNhaDBmJnBhc3NDb2RlPWI5c2o.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '娘子',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTVrUWQwemNhZ25jJnBhc3NDb2RlPTN4ZWM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '可爱女人',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXNMcVYwemNhZjVpJnBhc3NDb2RlPWR2dHA.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '黑色幽默',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXJydnMwemNhZWtoJnBhc3NDb2RlPTN6NzM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '反方向的钟',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUwyekUwemNhZWJpJnBhc3NDb2RlPWY2Y28.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '斗牛',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWlGZjEwemNhZHlmJnBhc3NDb2RlPWV4Ymg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2000-Jay/jay.jpg'
      },
      {
		title: '爱在西元前',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTVQNjUwemU5dGFkJnBhc3NDb2RlPWRpZjI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '安静',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTRmdlowemU5dWJhJnBhc3NDb2RlPWNiemg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '爸我回来了',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVpzREkwemU5dXplJnBhc3NDb2RlPWNmYnQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '对不起',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXViQnUwemU5dmVqJnBhc3NDb2RlPWM5YWY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '简单爱',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVd4VVcwemU5dnhpJnBhc3NDb2RlPTUyMjk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '开不了口',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVg3M2owemU5d3hlJnBhc3NDb2RlPTN3c2c.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '忍者',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXd0Zm0wemU5eDZkJnBhc3NDb2RlPWhqanc.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '上海一九四三',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTE0V2kwemU5eHdqJnBhc3NDb2RlPWRra24.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '双截棍',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVh0QmUwemU5eXBpJnBhc3NDb2RlPThtY2Y.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '威廉古堡',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUlQTGswemU5ejdnJnBhc3NDb2RlPTI4eXc.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2001-范特西/ftx.jpg'
      },
      {
		title: '半兽人',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWw1dDgwemViZjZoJnBhc3NDb2RlPWY2cHE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '半岛铁盒',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVFKOUkwemViZndkJnBhc3NDb2RlPWFxaWE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '暗号',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXNVbEwwemViZ2dkJnBhc3NDb2RlPWFveDc.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '龙拳',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXJzWnYwemViZ3JlJnBhc3NDb2RlPTgwMDg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '火车叨位去',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaU5NYVkwemViaDNnJnBhc3NDb2RlPTV2dWg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '离开',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaU1US2kwemViaGZpJnBhc3NDb2RlPWdoYm8.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '爷爷泡的茶',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUJCNmwwemViaG1mJnBhc3NDb2RlPWhkeWk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '回到过去',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXI2UlkwemViaHdmJnBhc3NDb2RlPTJyYTU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '米兰的小铁匠',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVc0V2IwemViaTdnJnBhc3NDb2RlPWIycDk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '最后的战役',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXdrdjEwemViaW5jJnBhc3NDb2RlPTNlNjU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2002-八度空间/bdkj.jpg'
      },
      {
		title: '晴天',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVJycTUwemVmOGhhJnBhc3NDb2RlPTNmd3Q.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '懦夫',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVJraFcwemVmODVpJnBhc3NDb2RlPTJqYzE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '以父之名',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTJJbG0wemVmN3FkJnBhc3NDb2RlPWQ0Z3U.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '双刀',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVhLVkswemVmNzVjJnBhc3NDb2RlPTYxdWQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '梯田',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaW0wUkcwemVmNm1kJnBhc3NDb2RlPWdnNmU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '爱情悬崖',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVhpeE0wemVmNjlhJnBhc3NDb2RlPTRlMWQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '她的睫毛',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVI1TFcwemVmNXlqJnBhc3NDb2RlPWF1NGU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '同一种调调',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUljeDgwemVmNW9qJnBhc3NDb2RlPWFuZG4.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '你听得到',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXpqRVEwemVmNWVqJnBhc3NDb2RlPWkxaDE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '东风破',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWxKSkMwemVmNTBmJnBhc3NDb2RlPWR1bmQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '三年二班',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWVwVnYwemVmNG5jJnBhc3NDb2RlPTFtcXY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2003-叶惠美/yhm.jpg'
      },
      {
		title: '困兽之斗',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWNUVk4wemVmdmhpJnBhc3NDb2RlPTQwazA.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '借口',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUtXUmIwemVmdjdpJnBhc3NDb2RlPWI4bjI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '将军',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUJJVGEwemVmdXdoJnBhc3NDb2RlPTg3aGs.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '搁浅',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXNMWXQwemVmdW5pJnBhc3NDb2RlPWNoZ3A.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '止战之殇',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXlzNHIwemVmdHVqJnBhc3NDb2RlPTFmc2g.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '园游会',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWdqNlAwemVmc3NiJnBhc3NDb2RlPWZ1eGY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '我的地盘',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUVVZFgwemVmczNnJnBhc3NDb2RlPWZzdzQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '外婆',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVB2OEowemVmcnJlJnBhc3NDb2RlPWgxbXM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '七里香',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUVzYmwwemVmcmdkJnBhc3NDb2RlPTJ6NG0.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '乱舞春秋',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXp0U0IwemVmcjFpJnBhc3NDb2RlPWhod2g.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2004-七里香/qlx.jpg'
      },
      {
		title: '浪漫手机',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVhSYzIwemVnYnZpJnBhc3NDb2RlPWRrODg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '蓝色风暴',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWMzcXEwemVnYmpnJnBhc3NDb2RlPTFkNms.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '黑色毛衣',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXpTYkswemVnYjZkJnBhc3NDb2RlPWJjbjQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '枫',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaU0wcjUwemVnYXRhJnBhc3NDb2RlPWZyNTg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '发如雪',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXBJTlEwemVnYWNkJnBhc3NDb2RlPTE4OHc.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '一路向北',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWVoaHkwemVnOXdoJnBhc3NDb2RlPTUzbzU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '夜曲',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUg1eXEwemVnOWlkJnBhc3NDb2RlPTY5dWU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '四面楚歌',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUFtMU4wemVnOThkJnBhc3NDb2RlPWZ6cDE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '珊瑚海',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTdZeTQwemVnOHdiJnBhc3NDb2RlPTN4ZGs.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '飘移',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWs4YkgwemVnOG9kJnBhc3NDb2RlPTlpaDQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '逆鳞',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUw1RTUwemVnODdnJnBhc3NDb2RlPWg4cno.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '麦芽糖',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWVjOW4wemVnN25nJnBhc3NDb2RlPTVnY2I.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2005-11月的萧邦/xb.jpg'
      },
      {
		title: '本草纲目',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWVPZU8wemVnd2pjJnBhc3NDb2RlPThjZGU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '退后',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVdUVTMwemVnd3ZlJnBhc3NDb2RlPTZiamI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '红模仿',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVE5WFcwemVneDRkJnBhc3NDb2RlPWN1dm0.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '心雨',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXJJQVEwemVneGNiJnBhc3NDb2RlPWR4YmY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '白色风车',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUpvb3EwemVneGtqJnBhc3NDb2RlPTdiMTE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '迷迭香',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVh1YVAwemVneTNpJnBhc3NDb2RlPWJ4aTU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '菊花台',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWhsZW4wemVneTllJnBhc3NDb2RlPTYwNnk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '夜的第七章',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTV3Tm4wemVneWZhJnBhc3NDb2RlPTFxNWI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '听妈妈的话',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaURiWHIwemVneW9qJnBhc3NDb2RlPTV3cHY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '千里之外',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXo3ekQwemVneXhpJnBhc3NDb2RlPWZwc3A.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2006-依然范特西/yrftx.jpg'
      },
      {
		title: '阳光宅男',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWh4Mm4wemVoN3diJnBhc3NDb2RlPTYyOTE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '青花瓷',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXR4MXowemVoN3FmJnBhc3NDb2RlPWM0MnY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '彩虹',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUZ2dnQwemVoN2tqJnBhc3NDb2RlPWcydHM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '牛仔很忙',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWdLdHAwemVoNzhoJnBhc3NDb2RlPTV4bWs.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '我不配',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVc2QjMwemVoNzJiJnBhc3NDb2RlPWZ5MGQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '最长的电影',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXpJdDIwemVoNnZlJnBhc3NDb2RlPWVvdHY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '甜甜的',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUc4NlkwemVoNmpjJnBhc3NDb2RlPTR0azI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '扯',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVpka2wwemVoNmJlJnBhc3NDb2RlPTNmdDU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '无双',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUMwdUcwemVoNjdhJnBhc3NDb2RlPWRlaG4.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '蒲公英的约定',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaW9LelEwemVoNjFlJnBhc3NDb2RlPWVqcXk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2007-我很忙/whm.jpg'
      },
      {
		title: '蛇舞',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWRWNVgwemVoajVnJnBhc3NDb2RlPTIzZXQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '给我一首歌的时间',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaU9JSWowemVoaXRlJnBhc3NDb2RlPTRnNXE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '龙战骑士',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVZobW0wemVoaWVqJnBhc3NDb2RlPTIzNmE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '说好的幸福呢',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWZYZVAwemVoaHdiJnBhc3NDb2RlPWIzMTQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '稻香',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUdsYkUwemVoaGppJnBhc3NDb2RlPWh6dHk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '乔克叔叔',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVR0NXQwemVoaGRjJnBhc3NDb2RlPTRic28.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '时光机',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXBDd1AwemVoaDVlJnBhc3NDb2RlPWZ2dWU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '流浪诗人',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXJrQnowemVoZ3loJnBhc3NDb2RlPTJjNG0.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '兰亭序',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWFUYVAwemVoZ3RjJnBhc3NDb2RlPTIwY2E.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '魔术先生',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVRMbFkwemVoZ21mJnBhc3NDb2RlPTUxYnA.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '花海',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUVEUXYwemVoZ2hhJnBhc3NDb2RlPTM2dXE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2008-魔杰座/mjz.jpg'
      },
      {
		title: '好久不见',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaW9VM0UwemVodnFqJnBhc3NDb2RlPTV4aW0.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '免费教学录像带',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWlRbUMwemVodmpjJnBhc3NDb2RlPWQ1anY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '烟花易冷',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWhaUjUwemVodmFkJnBhc3NDb2RlPTN2dHg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '说了再见',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTFZYUkwemVodXZpJnBhc3NDb2RlPTl0aHQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '跨时代',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVVzRkswemVodWxpJnBhc3NDb2RlPTd1YjY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '超人不会飞',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWhBSzkwemVodWRhJnBhc3NDb2RlPTFmZnI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '自导自演',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXpCWFIwemVodTBoJnBhc3NDb2RlPTRjNXU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '爱的飞行日记',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWVFV28wemVodHJpJnBhc3NDb2RlPWk3ZW8.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '我落泪情绪零碎',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVRDSjMwemVodGhpJnBhc3NDb2RlPTd4cmM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '嘻哈空姐',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWtiNnEwemVodDdpJnBhc3NDb2RlPWI2d3A.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '雨下一整晚',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXBhcjcwemVodDRmJnBhc3NDb2RlPWRvZWE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2010-跨时代/ksd.jpg'
      },
      {
		title: '疗伤烧肉粽',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTBLclIwemVpNjBqJnBhc3NDb2RlPWRpb2E.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '惊叹号',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUNYSnEwemVpNXhnJnBhc3NDb2RlPTR0cms.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '公主病',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVRzWmcwemVpNW5nJnBhc3NDb2RlPTZhazQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '超跑女神',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXNIQ0owemVpNWZpJnBhc3NDb2RlPTdlMDc.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: 'Mine Mine',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVVNSkUwemVpNHJlJnBhc3NDb2RlPWhwczY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '水手怕水',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVZHRmwwemVpNGpnJnBhc3NDb2RlPTc5MG8.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '世界末末日',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWVHMkwwemVpNGZjJnBhc3NDb2RlPTVxdHU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '琴伤',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaU45Sk8wemVpNDhmJnBhc3NDb2RlPTViM3c.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '皮影戏',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVNZMEowemVpM3lmJnBhc3NDb2RlPWk0czg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '你好吗',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVhEdE0wemVpM3RhJnBhc3NDb2RlPWkzM2Y.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '迷魂曲',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXBsQVQwemVpM2NkJnBhc3NDb2RlPTFpc2M.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2011-惊叹号/jth.jpg'
      },
      {
		title: '公公偏头痛',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWw0a1gwemVpYmNiJnBhc3NDb2RlPTZhdmU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '手语',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVE1WHMwemVpYmFqJnBhc3NDb2RlPThreWQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '四季列车',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUgzTHcwemVpYjJiJnBhc3NDb2RlPTk0Y20.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '乌克丽丽',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWZEMWcwemVpYXloJnBhc3NDb2RlPWdiamM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '哪里都是你',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVF0aTEwemVpYXJhJnBhc3NDb2RlPTI4dGg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '大笨钟',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTA0VUUwemVpYWxlJnBhc3NDb2RlPTR1cGM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '梦想启动',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXI4UXMwemVpYWpjJnBhc3NDb2RlPTh5Z2g.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '红尘客栈',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTE1cXQwemVpYWVoJnBhc3NDb2RlPWdqdm0.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '爱你没差',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWt6RmkwemVpYWFkJnBhc3NDb2RlPWdlemI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '比较大的大提琴',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTQ5SDkwemVpYTVpJnBhc3NDb2RlPWI3dWI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '傻笑',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWNZTXgwemVpYTFlJnBhc3NDb2RlPTJiODc.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '明明就',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUV1ajAwemVpOXpjJnBhc3NDb2RlPWJwdTk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2012-十二新作/sexz.jpg'
      },
      {
		title: '窃爱',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUlYUUIwemVpbmtiJnBhc3NDb2RlPTJiMTU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '阳明山',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVZPSXUwemVpbjFjJnBhc3NDb2RlPTQ0ODE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '听见下雨的声音',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXl2V1cwemVpbW5pJnBhc3NDb2RlPTJ5YnE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '美人鱼',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWNubnUwemVpbWNoJnBhc3NDb2RlPTFidGM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '听爸爸的话',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVloWFQwemVpbTllJnBhc3NDb2RlPWFzOXQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '鞋子特大号',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWxPZFUwemVpbHplJnBhc3NDb2RlPWE5NTA.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '手写的从前',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVZ2ZEwwemVpbHZhJnBhc3NDb2RlPWRkNTM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '我要夏天',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXdXdzQwemVpbG1iJnBhc3NDb2RlPWc5cjg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '一口气全念对',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTM0S0QwemVpbDlpJnBhc3NDb2RlPWNlZ2k.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '怎么了',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVhpcVMwemVpa3hnJnBhc3NDb2RlPWN4ZWo.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '天涯过客',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVVZUVEwemVpa2hhJnBhc3NDb2RlPTZ6cHo.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '算什么男人',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXNDNkkwemVpanliJnBhc3NDb2RlPTF0a2M.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2014-哎呦，不错哦/bco.jpg'
      },
      {
		title: '一点点',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaURhZDAwemVpeDlhJnBhc3NDb2RlPWk0MnA.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '说走就走',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXFNZGwwemVpeDNlJnBhc3NDb2RlPTY5bms.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '床边故事',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUFvcDAwemVpeDFjJnBhc3NDb2RlPWZ3ajM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '爱情废柴',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXNWOUQwemVpd3doJnBhc3NDb2RlPWkwd2E.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: 'Now You See Me',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWVBRUkwemVpd2ZhJnBhc3NDb2RlPTFhZWs.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '告白气球',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXZZZkQwemVpdzJoJnBhc3NDb2RlPWVkaHM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '土耳其冰淇淋',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVRmOTgwemVpdnJnJnBhc3NDb2RlPTd3NWg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '不该',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWVwZ2EwemVpdmtqJnBhc3NDb2RlPWV2dzE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '英雄',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWZhWHowemVpdjFhJnBhc3NDb2RlPWdkOHI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '前世情人',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTJsQ2swemVpdW5nJnBhc3NDb2RlPWJzdGU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2016-周杰伦的床边故事/cbgs.jpg'
      },
      {
		title: '我是如此相信',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTlQUFYwemVqMnBnJnBhc3NDb2RlPTV5OGQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '说好不哭',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaU02ZlQwemVqMm5lJnBhc3NDb2RlPTdyOXU.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '等你下课',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTJrWnYwemVqMmphJnBhc3NDb2RlPWdwbXg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '倒影',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTNxWlgwemVqMmRlJnBhc3NDb2RlPTRiZ3Q.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '粉色海洋',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXFpN0MwemVqMjhqJnBhc3NDb2RlPTh6ZTQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '错过的烟火',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaU5laHYwemVqMjZoJnBhc3NDb2RlPTdzM3A.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '不爱我就拉倒',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWFqMFYwemVqMjJkJnBhc3NDb2RlPWdoZHk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '红颜如霜',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUhEVkMwemVqMXhpJnBhc3NDb2RlPTZrcm0.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '还在流浪',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaThITGQwemVqMXZnJnBhc3NDb2RlPTNiNWs.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '最伟大的作品',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUdBQTAwemVqMXFiJnBhc3NDb2RlPTFlMHI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: 'Mojito',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUZxMEkwemVqMW5pJnBhc3NDb2RlPWZ5YnQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: 'Intro',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWRscTMwemVqMWxnJnBhc3NDb2RlPTh5cHg.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/2022-最伟大的作品/zwdzp.jpg'
      },
      {
		title: '世界末日',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaURpWTgwemVqYWdmJnBhc3NDb2RlPTUyYjI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '千山万水',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTQ1eGkwemVqYThoJnBhc3NDb2RlPWJrd3I.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '你比从前快乐',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWdwbEwwemVqYTVlJnBhc3NDb2RlPWdqd20.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '霍元甲',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTVHNHUwemVqOXloJnBhc3NDb2RlPTY0OHY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '黄金甲',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUVtcTcwemVqOXhnJnBhc3NDb2RlPWM2d3A.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '画沙',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWFITVYwemVqOXJhJnBhc3NDb2RlPWdjaDk.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '轨迹',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaW94T2wwemVqOW1mJnBhc3NDb2RlPWNxcGo.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '断了的弦',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTNVNHAwemVqOWJlJnBhc3NDb2RlPTk2YnY.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '布拉格广场',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWV0U28wemVqOTZqJnBhc3NDb2RlPTduYmE.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '不能说的秘密',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWxkOHcwemVqOTFlJnBhc3NDb2RlPTU3OTI.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '周大侠',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUN3V3kwemVqOHVoJnBhc3NDb2RlPWN6a2s.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '与父共舞',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaVpINlYwemVqOG9iJnBhc3NDb2RlPWF0Z2U.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '屋顶',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaWFTN1EwemVqOGtoJnBhc3NDb2RlPWg5ZGo.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '蜗牛',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaUc4M0EwemVqOGFoJnBhc3NDb2RlPTh6ODQ.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '天台的月光',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaXZmWHEwemVqODRiJnBhc3NDb2RlPTVnbzM.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      },
      {
		title: '天地一斗',
		author: '周杰伦',
		url: 'https://link.jscdn.cn/lanzou/aHR0cHM6Ly96aTB3aTE1b24ubGFuem91ay5jb20vaTF0eDcwemVqN3lmJnBhc3NDb2RlPWcxeWs.mp3',
		pic: 'https://echeverra.cn/wp-content/static/jayChou/其他/cover.jpg'
      }
    ]
});
ap.init();