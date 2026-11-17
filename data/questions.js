/* 自动生成：scripts/build_data.py | 数据源：两份 docx 题库 + 逐题审核标注 */
window.QBANK = [
 {
  "id": "single-01",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 1,
  "stem": "在深度学习中，ReLU激活函数的主要优势是？",
  "options": [
   {
    "key": "A",
    "text": "输出范围有限"
   },
   {
    "key": "B",
    "text": "缓解梯度消失"
   },
   {
    "key": "C",
    "text": "计算复杂度高"
   },
   {
    "key": "D",
    "text": "仅适用于RNN"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "ReLU在正区间导数恒为1，不会像Sigmoid、Tanh那样两端饱和而梯度消失，且计算简单、负半轴输出稀疏。A项说输出范围有限恰恰相反，ReLU无上界；C、D也不符合事实。",
  "tip": "ReLU正区间梯度恒为1不饱和",
  "pitfall": "勿把「输出稀疏」当成「输出有限」"
 },
 {
  "id": "single-02",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 2,
  "stem": "下列哪项技术最常用于防止神经网络过拟合？",
  "options": [
   {
    "key": "A",
    "text": "增加训练轮次"
   },
   {
    "key": "B",
    "text": "Dropout"
   },
   {
    "key": "C",
    "text": "增大学习率"
   },
   {
    "key": "D",
    "text": "删除验证集"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "Dropout训练时随机失活部分神经元，减少神经元间的共适应，相当于集成多个子网络，是经典正则化手段。A增加轮次会加剧过拟合，C增大学习率与防过拟合无关，D删验证集无法评估泛化。",
  "tip": "Dropout训练随机丢，推理用全量",
  "pitfall": "推理时须关闭Dropout，否则结果随机波动"
 },
 {
  "id": "single-03",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 3,
  "stem": "在目标检测中，IoU指标用于衡量？",
  "options": [
   {
    "key": "A",
    "text": "类别置信度"
   },
   {
    "key": "B",
    "text": "预测框与真实框的重叠度"
   },
   {
    "key": "C",
    "text": "图像清晰度"
   },
   {
    "key": "D",
    "text": "网络参数量"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "IoU等于预测框与真实框的交集面积除以并集面积，取值0到1，衡量两者重叠程度，是检测里判定正负样本、计算mAP的基础。A是分类分支的类别置信度，C、D与框定位无关。",
  "tip": "IoU=交集/并集，越大框越准",
  "pitfall": "无重叠时IoU恒为0，反映不出框间距离"
 },
 {
  "id": "single-04",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 4,
  "stem": "Batch Normalization通常放在卷积层之后的哪一步骤？",
  "options": [
   {
    "key": "A",
    "text": "激活函数前"
   },
   {
    "key": "B",
    "text": "池化层前"
   },
   {
    "key": "C",
    "text": "全连接层后"
   },
   {
    "key": "D",
    "text": "损失函数后"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "BatchNorm对卷积输出按通道做均值方差归一化，再经可学习缩放平移，通常紧接卷积、置于激活函数之前，即Conv→BN→ReLU，让归一化后的输入再进非线性，训练更稳定。",
  "tip": "Conv→BN→ReLU，BN在激活前",
  "pitfall": "原论文把BN放在激活前，别按直觉放到激活后"
 },
 {
  "id": "single-05",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 5,
  "stem": "Transformer结构中，Positional Encoding的作用是？",
  "options": [
   {
    "key": "A",
    "text": "降低计算量"
   },
   {
    "key": "B",
    "text": "引入序列位置信息"
   },
   {
    "key": "C",
    "text": "增强梯度"
   },
   {
    "key": "D",
    "text": "压缩词向量"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "Transformer既无循环也无卷积，本身不感知顺序，Positional Encoding用正弦函数或可学习向量为每个位置注入唯一编码，使模型能区分词序。它不减少计算量，也不压缩词向量。",
  "tip": "自注意无位置感，PE补上顺序",
  "pitfall": "PE是加在输入Embedding上，不是拼在输出端"
 },
 {
  "id": "single-06",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 6,
  "stem": "在强化学习中，Q-learning更新的是？",
  "options": [
   {
    "key": "A",
    "text": "策略函数"
   },
   {
    "key": "B",
    "text": "状态转移概率"
   },
   {
    "key": "C",
    "text": "状态-动作值函数"
   },
   {
    "key": "D",
    "text": "奖励函数"
   }
  ],
  "answer": "C",
  "accept": [
   "C"
  ],
  "status": "ok",
  "explain": "Q-learning用贝尔曼方程迭代更新状态-动作值函数Q(s,a)，以即时奖励加折扣后的最大Q值为目标，再取argmax得到策略。它不直接改策略函数，也不学习转移概率或奖励函数。",
  "tip": "Q-learning学Q(s,a)，不直接学策略",
  "pitfall": "与策略梯度混淆：后者才直接优化策略"
 },
 {
  "id": "single-07",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 7,
  "stem": "LSTM与标准RNN相比，主要改进在于？",
  "options": [
   {
    "key": "A",
    "text": "减少参数量"
   },
   {
    "key": "B",
    "text": "引入门控机制"
   },
   {
    "key": "C",
    "text": "支持并行计算"
   },
   {
    "key": "D",
    "text": "无需反向传播"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "LSTM在RNN单元中引入输入门、遗忘门、输出门和细胞状态，可控地保留或丢弃历史信息，从而缓解长序列的梯度消失。它参数量比标准RNN更多，且仍按时间步串行，不能并行。",
  "tip": "三门一细胞：输入、遗忘、输出",
  "pitfall": "LSTM不能并行，也并未取代反向传播"
 },
 {
  "id": "single-08",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 8,
  "stem": "用于图像风格迁移的经典损失函数组合是？",
  "options": [
   {
    "key": "A",
    "text": "交叉熵 + MSE"
   },
   {
    "key": "B",
    "text": "内容损失 + 风格损失"
   },
   {
    "key": "C",
    "text": "IoU + Dice"
   },
   {
    "key": "D",
    "text": "KL散度 + 余弦相似度"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "Gatys风格迁移用预训练VGG的高层特征算内容损失以保持结构，用Gram矩阵算风格损失以匹配纹理色彩，两者加权优化。A、C、D分别是分类、分割、相似度的常用组合，与风格迁移不匹配。",
  "tip": "内容用高层特征，风格用Gram矩阵",
  "pitfall": "风格损失比的是特征相关性，不是逐像素差"
 },
 {
  "id": "single-09",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 9,
  "stem": "在GAN训练中，判别器的目标函数本质是？",
  "options": [
   {
    "key": "A",
    "text": "最小化生成分布与真实分布的JS散度"
   },
   {
    "key": "B",
    "text": "最大化分类准确率"
   },
   {
    "key": "C",
    "text": "最小化像素级MSE"
   },
   {
    "key": "D",
    "text": "最大化梯度范数"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "error",
  "docAnswer": "A",
  "insight": "文件答案 A 把「最小化 JS 散度」安到了判别器头上。GAN 是极小极大博弈：判别器 D 最大化 logD(x)+log(1−D(G(z)))，即最大化真假样本的可分性（等价于最大化 JS 散度）；最小化 JS 散度是生成器 G 的目标。若原题想问「GAN 整体优化目标」，A 才成立。四个选项中 B「最大化分类准确率」最接近（严格说是最大化二分类对数似然），故判 A 错误、应选 B。",
  "explain": "GAN是极小极大博弈：判别器D要最大化真假样本的对数似然、尽量分清真假，等价于最大化JS散度；最小化JS散度、让生成样本骗过D才是生成器的目标。A把两者目标张冠李戴，C、D也与判别器无关。",
  "tip": "D最大化分清真假，G最小化JS散度",
  "pitfall": "易错选A：最小化JS散度是生成器的目标"
 },
 {
  "id": "single-10",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 10,
  "stem": "ResNet引入残差连接的主要目的是？",
  "options": [
   {
    "key": "A",
    "text": "减少内存占用"
   },
   {
    "key": "B",
    "text": "解决深层网络退化"
   },
   {
    "key": "C",
    "text": "提高学习率"
   },
   {
    "key": "D",
    "text": "替代卷积操作"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "残差连接让网络学习F(x)=H(x)-x，恒等映射更易优化，短路连接使梯度可直接回传，从而解决深层网络的退化问题，让上百层网络可训练。它不减少内存占用，也不替代卷积或提高学习率。",
  "tip": "残差学增量，短路让梯度直通",
  "pitfall": "退化是训练误差上升，与过拟合不是一回事"
 },
 {
  "id": "single-11",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 11,
  "stem": "下列哪种优化器自带自适应学习率？",
  "options": [
   {
    "key": "A",
    "text": "SGD"
   },
   {
    "key": "B",
    "text": "Adam"
   },
   {
    "key": "C",
    "text": "BGD"
   },
   {
    "key": "D",
    "text": "Momentum"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "Adam同时利用一阶动量与二阶动量，按梯度平方的指数平均为每个参数自适应缩放学习率。SGD、BGD是固定步长，Momentum只加一阶动量，没有逐参数调整步长，故B最符合。",
  "tip": "Adam=动量+自适应步长",
  "pitfall": "Momentum有动量但没有自适应学习率"
 },
 {
  "id": "single-12",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 12,
  "stem": "在BERT预训练中，Masked Language Model的作用是？",
  "options": [
   {
    "key": "A",
    "text": "预测下一个句子"
   },
   {
    "key": "B",
    "text": "恢复被遮盖的词"
   },
   {
    "key": "C",
    "text": "生成摘要"
   },
   {
    "key": "D",
    "text": "压缩模型"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "Masked Language Model随机遮盖部分token，让模型根据双向上下文预测被遮盖的词，从而学到深层双向表示。A预测下一句是NSP任务，C生成摘要、D压缩模型都与预训练目标无关。",
  "tip": "MLM挖词填空，NSP判断下一句",
  "pitfall": "BERT不是自回归地预测下一个词"
 },
 {
  "id": "single-13",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 13,
  "stem": "语义分割任务常用的评价指标mIoU是指？",
  "options": [
   {
    "key": "A",
    "text": "平均类别交并比"
   },
   {
    "key": "B",
    "text": "平均像素精度"
   },
   {
    "key": "C",
    "text": "平均Dice系数"
   },
   {
    "key": "D",
    "text": "平均Hausdorff距离"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "mIoU先对每个类别计算预测与真值的交并比，再对所有类别取平均，对各类一视同仁，能反映小类别的分割质量。B平均像素精度易被大类主导，C、D是其他任务的评价指标。",
  "tip": "mIoU=各类IoU再取平均",
  "pitfall": "勿与像素准确率混淆，后者偏向大类"
 },
 {
  "id": "single-14",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 14,
  "stem": "决策树算法中，信息增益基于哪个概念？",
  "options": [
   {
    "key": "A",
    "text": "基尼指数"
   },
   {
    "key": "B",
    "text": "熵"
   },
   {
    "key": "C",
    "text": "欧氏距离"
   },
   {
    "key": "D",
    "text": "方差"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "信息增益等于划分前后熵的减少量，ID3用它选择特征，增益越大说明该特征带来的不确定度下降越多。A基尼指数是CART的划分指标，C、D与决策树的划分准则无关。",
  "tip": "信息增益=熵减，ID3；基尼=CART",
  "pitfall": "增益偏向取值多的特征，C4.5用增益率修正"
 },
 {
  "id": "single-15",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 15,
  "stem": "在联邦学习中，客户端上传的通常是？",
  "options": [
   {
    "key": "A",
    "text": "原始数据"
   },
   {
    "key": "B",
    "text": "模型梯度"
   },
   {
    "key": "C",
    "text": "完整模型"
   },
   {
    "key": "D",
    "text": "超参数"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "联邦学习让数据留在本地，客户端本地训练后仅上传梯度或模型更新，服务器聚合后再下发，从而保护隐私、减少传输。上传原始数据会泄露隐私且带宽开销大，超参数也不由客户端上传。",
  "tip": "数据不出本地，只传梯度或更新",
  "pitfall": "上传的是更新量，不是完整模型或原始数据"
 },
 {
  "id": "single-16",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 16,
  "stem": "下列哪项不是卷积操作的超参数？",
  "options": [
   {
    "key": "A",
    "text": "步长"
   },
   {
    "key": "B",
    "text": "填充"
   },
   {
    "key": "C",
    "text": "通道数"
   },
   {
    "key": "D",
    "text": "权重衰减"
   }
  ],
  "answer": "D",
  "accept": [
   "D"
  ],
  "status": "ok",
  "explain": "卷积层的超参数包括步长、填充、卷积核大小和通道数，它们决定卷积怎么算、输出多大。权重衰减是正则化项系数，写在损失函数一侧，不属于卷积运算本身的超参数，故D符合题意。",
  "tip": "卷积超参：核、步长、填充、通道数",
  "pitfall": "权重衰减是正则化系数，不属卷积超参"
 },
 {
  "id": "single-17",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 17,
  "stem": "用于文本生成的采样策略中，temperature参数控制？",
  "options": [
   {
    "key": "A",
    "text": "句子长度"
   },
   {
    "key": "B",
    "text": "随机性程度"
   },
   {
    "key": "C",
    "text": "词频权重"
   },
   {
    "key": "D",
    "text": "批大小"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "temperature对logits做缩放后再softmax：温度小于1时分布更尖锐、输出更确定，大于1时更平坦、随机性更强。它不控制句子长度、词频权重或批大小，故B正确。",
  "tip": "温度高更随机，温度低更确定",
  "pitfall": "Temperature在softmax前作用于logits"
 },
 {
  "id": "single-18",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 18,
  "stem": "在AutoML中，神经架构搜索（NAS）的核心是？",
  "options": [
   {
    "key": "A",
    "text": "人工设计网络"
   },
   {
    "key": "B",
    "text": "自动寻找最优网络结构"
   },
   {
    "key": "C",
    "text": "压缩模型体积"
   },
   {
    "key": "D",
    "text": "增加数据集"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "神经架构搜索在搜索空间中用强化学习、进化或可微方法自动寻找最优网络结构，以验证集性能作为奖励。人工设计网络正是它要替代的对象，模型压缩与扩充数据集都不属于NAS范畴。",
  "tip": "NAS=搜索空间+搜索策略+评估",
  "pitfall": "NAS找网络结构，调超参不算NAS"
 },
 {
  "id": "single-19",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 19,
  "stem": "下列哪种方法可将预训练模型适配小样本任务？",
  "options": [
   {
    "key": "A",
    "text": "数据增强"
   },
   {
    "key": "B",
    "text": "微调（Fine-tuning）"
   },
   {
    "key": "C",
    "text": "增加层数"
   },
   {
    "key": "D",
    "text": "减少通道"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "微调在预训练权重基础上，用小样本任务数据继续训练，把通用表示迁移到目标任务，是适配小样本的主流做法。数据增强不改变模型来源，增加层数、减少通道也都不是适配手段。",
  "tip": "小样本先加载预训练，再微调",
  "pitfall": "小样本微调宜用小学习率，防灾难性遗忘"
 },
 {
  "id": "single-20",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 20,
  "stem": "集成学习中，Bagging的主要思想是？",
  "options": [
   {
    "key": "A",
    "text": "顺序训练弱学习器"
   },
   {
    "key": "B",
    "text": "并行训练多样模型"
   },
   {
    "key": "C",
    "text": "共享权重"
   },
   {
    "key": "D",
    "text": "降低偏差"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "Bagging通过自助采样得到多个子集，并行训练出彼此独立的基学习器，再投票或平均，主要降低方差、提升稳定性，随机森林是典型。顺序训练是Boosting思想，共享权重不符，降偏差主要由Boosting负责。",
  "tip": "Bagging并行降方差，Boosting串行降偏差",
  "pitfall": "Bagging降方差而非降偏差，别记反"
 },
 {
  "id": "single-21",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 21,
  "stem": "在注意力机制中，缩放点积注意力的“缩放”因子是？",
  "options": [
   {
    "key": "A",
    "text": "特征维度平方根"
   },
   {
    "key": "B",
    "text": "序列长度"
   },
   {
    "key": "C",
    "text": "批大小"
   },
   {
    "key": "D",
    "text": "学习率"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "缩放点积注意力把QK^T除以特征维度d_k的平方根，防止维度较大时点积数值过大、softmax进入饱和区导致梯度消失。缩放因子与序列长度、批大小、学习率都无关，故A正确。",
  "tip": "除以sqrt(d_k)，防softmax饱和",
  "pitfall": "缩放因子是sqrt(d_k)，不是序列长度"
 },
 {
  "id": "single-22",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 22,
  "stem": "用于模型压缩的剪枝（Pruning）通常基于？",
  "options": [
   {
    "key": "A",
    "text": "权重重要性"
   },
   {
    "key": "B",
    "text": "梯度大小"
   },
   {
    "key": "C",
    "text": "损失值"
   },
   {
    "key": "D",
    "text": "学习率"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "剪枝依据权重的重要性（如绝对值大小、对损失的敏感度）删掉贡献小的连接或通道，再微调恢复精度，从而压缩模型。梯度大小、损失值、学习率都不是剪枝的通用判据。",
  "tip": "剪枝看权重重要性，剪小留大",
  "pitfall": "结构化剪枝按通道，非结构化按单个权重"
 },
 {
  "id": "single-23",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 23,
  "stem": "YOLOv5中，SPPF模块的作用是？",
  "options": [
   {
    "key": "A",
    "text": "减少参数量"
   },
   {
    "key": "B",
    "text": "增强多尺度特征"
   },
   {
    "key": "C",
    "text": "替换激活函数"
   },
   {
    "key": "D",
    "text": "降低分辨率"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "SPPF用多个不同尺寸的最大池化串联后再拼接，以较小代价获得多尺度感受野，增强特征表达，是空间金字塔池化的快速版本。它不主打减少参数，也不替换激活函数或降低分辨率。",
  "tip": "SPPF串行池化，低成本多尺度",
  "pitfall": "SPPF改并行串行是为提速，不是为减参数"
 },
 {
  "id": "single-24",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 24,
  "stem": "下列哪项技术可将浮点模型转为低比特整数？",
  "options": [
   {
    "key": "A",
    "text": "知识蒸馏"
   },
   {
    "key": "B",
    "text": "量化（Quantization）"
   },
   {
    "key": "C",
    "text": "数据并行"
   },
   {
    "key": "D",
    "text": "梯度累积"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "量化把浮点权重和激活映射为低比特整数（如INT8），减少存储与访存、加速推理，并可配合校准或量化感知训练控制精度损失。知识蒸馏学的是分布，数据并行与梯度累积用于训练。",
  "tip": "量化=浮点转INT8，蒸馏=师徒传分布",
  "pitfall": "量化省显存带宽，蒸馏主要传暗知识"
 },
 {
  "id": "single-25",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 25,
  "stem": "在NLP中，BLEU指标主要用于评估？",
  "options": [
   {
    "key": "A",
    "text": "文本生成质量"
   },
   {
    "key": "B",
    "text": "分类准确率"
   },
   {
    "key": "C",
    "text": "实体识别F1"
   },
   {
    "key": "D",
    "text": "情感极性"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "BLEU统计生成文本与参考译文在1到4元组上的匹配精度，再乘长度惩罚，用于衡量机器翻译、文本生成的质量。它不衡量分类准确率、实体识别F1或情感极性，故A正确。",
  "tip": "BLEU算n-gram重合，越高越像参考",
  "pitfall": "BLEU重精确率、不看语义，同义改写会失分"
 },
 {
  "id": "single-26",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 26,
  "stem": "下列哪种损失函数适合处理类别不平衡？",
  "options": [
   {
    "key": "A",
    "text": "交叉熵"
   },
   {
    "key": "B",
    "text": "Focal Loss"
   },
   {
    "key": "C",
    "text": "MSE"
   },
   {
    "key": "D",
    "text": "Hinge Loss"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "Focal Loss在交叉熵前乘(1-p_t)^γ，降低易分样本的权重，让模型聚焦难分样本，从而缓解正负样本极度不平衡。普通交叉熵和MSE会被大量易分负样本淹没，Hinge适合SVM式分类。",
  "tip": "Focal用(1-p)^γ压低易分样本",
  "pitfall": "γ越大越聚焦难例，过大会训练不稳"
 },
 {
  "id": "single-27",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 27,
  "stem": "在图神经网络中，GCN的核心操作是？",
  "options": [
   {
    "key": "A",
    "text": "邻接矩阵乘法"
   },
   {
    "key": "B",
    "text": "谱域卷积"
   },
   {
    "key": "C",
    "text": "池化聚合"
   },
   {
    "key": "D",
    "text": "随机游走"
   }
  ],
  "answer": "B",
  "accept": [
   "A",
   "B"
  ],
  "status": "doubt",
  "insight": "GCN 的谱域卷积是理论来源（Kipf & Welling 由谱图卷积做一阶近似推导），但实际实现就是归一化邻接矩阵与特征相乘、即邻域聚合（A）。所以 A、B 都能算对，题目选项区分度不足：按「核心操作/实现」应选 A，按「核心思想/理论来源」选 B。考试时若见「核心操作」建议答 A 并注明 B 为理论基础。",
  "explain": "GCN由谱图卷积做一阶近似推导而来，谱域卷积是其理论来源；实际计算则化为归一化邻接矩阵乘特征，即邻域聚合，两者等价。按理论来源本题取B，若题干强调核心操作则A同样成立，A、B均可接受。",
  "tip": "谱域是理论来源，邻域聚合是等价实现",
  "pitfall": "本题口径不严，A、B均有依据，按核心操作应选A"
 },
 {
  "id": "single-28",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 28,
  "stem": "用于超参数优化的贝叶斯方法基于？",
  "options": [
   {
    "key": "A",
    "text": "网格搜索"
   },
   {
    "key": "B",
    "text": "高斯过程"
   },
   {
    "key": "C",
    "text": "随机搜索"
   },
   {
    "key": "D",
    "text": "遗传算法"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "贝叶斯超参优化用高斯过程对目标函数建模，得到均值与不确定度，再通过采集函数（如EI、UCB）权衡探索与利用，选出下一组超参。网格与随机搜索不建代理模型，遗传算法属进化方法。",
  "tip": "贝叶斯优化=高斯过程+采集函数",
  "pitfall": "高斯过程是代理模型，不是被优化的目标函数"
 },
 {
  "id": "single-29",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 29,
  "stem": "在Diffusion模型中，前向过程是？",
  "options": [
   {
    "key": "A",
    "text": "逐步去噪"
   },
   {
    "key": "B",
    "text": "逐步加噪"
   },
   {
    "key": "C",
    "text": "直接采样"
   },
   {
    "key": "D",
    "text": "梯度下降"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "Diffusion的前向过程按预设方差表逐步向数据加入高斯噪声，直到近似纯噪声，且不含可学习参数；反向过程才由网络学习逐步去噪来生成样本。A对应反向过程，C、D与加噪无关。",
  "tip": "前向加噪无参数，反向去噪靠网络",
  "pitfall": "前向固定加噪，反向才需要训练"
 },
 {
  "id": "single-30",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 30,
  "stem": "下列哪项技术可加速Transformer推理？",
  "options": [
   {
    "key": "A",
    "text": "KV Cache"
   },
   {
    "key": "B",
    "text": "增加层数"
   },
   {
    "key": "C",
    "text": "降低批大小"
   },
   {
    "key": "D",
    "text": "移除注意力"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "自回归推理时，KV Cache缓存已生成token的键值向量，避免每步重复计算历史位置的注意力，显著降低解码延迟。增加层数、降低批大小、移除注意力都不能加速推理，故A正确。",
  "tip": "KV Cache缓存历史K、V，省重复计算",
  "pitfall": "KV Cache省计算但增显存，长上下文需分页管理"
 },
 {
  "id": "single-31",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 31,
  "stem": "在推荐系统中，Embedding层的作用是？",
  "options": [
   {
    "key": "A",
    "text": "降维并捕捉特征关系"
   },
   {
    "key": "B",
    "text": "增加计算量"
   },
   {
    "key": "C",
    "text": "替代全连接层"
   },
   {
    "key": "D",
    "text": "正则化"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "推荐系统中Embedding把高维稀疏的ID特征映射为低维稠密向量，既降维又让相似物品或用户在向量空间彼此靠近，捕捉共现关系。它不增加计算量，也不是替代全连接层的正则化手段。",
  "tip": "ID转低维稠密向量，近者相似",
  "pitfall": "Embedding是参数矩阵，要与模型一起训练"
 },
 {
  "id": "single-32",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 32,
  "stem": "用于目标跟踪的SORT算法核心是？",
  "options": [
   {
    "key": "A",
    "text": "卡尔曼滤波 + 匈牙利匹配"
   },
   {
    "key": "B",
    "text": "光流法"
   },
   {
    "key": "C",
    "text": "均值漂移"
   },
   {
    "key": "D",
    "text": "粒子滤波"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "SORT用卡尔曼滤波预测已有轨迹在下一帧的框位置，再用匈牙利算法基于IoU做检测框与轨迹的匹配，并做简单轨迹管理，实现多目标跟踪。光流、均值漂移、粒子滤波是其他跟踪思路。",
  "tip": "SORT：卡尔曼预测+匈牙利匹配",
  "pitfall": "SORT用IoU匹配，DeepSORT才加外观特征"
 },
 {
  "id": "single-33",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 33,
  "stem": "下列哪项不是数据增强的常见方法？",
  "options": [
   {
    "key": "A",
    "text": "随机裁剪"
   },
   {
    "key": "B",
    "text": "Mixup"
   },
   {
    "key": "C",
    "text": "增加通道数"
   },
   {
    "key": "D",
    "text": "颜色抖动"
   }
  ],
  "answer": "C",
  "accept": [
   "C"
  ],
  "status": "ok",
  "explain": "随机裁剪、Mixup、颜色抖动都通过变换样本扩充等效数据，属常见数据增强；增加通道数是修改网络结构或输入特征维度，并不产生新样本。题干问「不是」，故选C。",
  "tip": "数据增强变样本，加通道是改结构",
  "pitfall": "Mixup属混合增强，不是单纯几何变换"
 },
 {
  "id": "single-34",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 34,
  "stem": "在BERT微调中，通常冻结的层是？",
  "options": [
   {
    "key": "A",
    "text": "Embedding层"
   },
   {
    "key": "B",
    "text": "输出层"
   },
   {
    "key": "C",
    "text": "中间Transformer层"
   },
   {
    "key": "D",
    "text": "全部层"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "doubt",
  "insight": "BERT 微调的常规做法是全参数微调，并不「通常冻结」某层；只有数据少或算力紧时才冻结。若必须冻结，业界与教程更常冻结 Embedding 与底层 Transformer（越底层越通用），因此 A 是四个选项中最合理的，但题干预设不准。建议题干改为「小样本微调时通常冻结的层是」。",
  "explain": "BERT微调的常规做法是全参数微调，题干「通常冻结」本身不严谨；确需冻结时一般冻结Embedding与底层Transformer，因为越底层编码的越通用，小样本时冻结收益更明显。四个选项中A最合理。",
  "tip": "常规全参微调，冻结才选底层Embedding",
  "pitfall": "题干表述不严：BERT默认不冻结，小样本才冻结"
 },
 {
  "id": "single-35",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 35,
  "stem": "下列哪种算法属于无监督聚类？",
  "options": [
   {
    "key": "A",
    "text": "K-Means"
   },
   {
    "key": "B",
    "text": "SVM"
   },
   {
    "key": "C",
    "text": "逻辑回归"
   },
   {
    "key": "D",
    "text": "随机森林"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "K-Means只用特征、不依赖标签，通过迭代把样本分到最近质心并更新质心，最小化簇内距离，属无监督聚类。SVM、逻辑回归、随机森林都是有监督的分类器，故A正确。",
  "tip": "无标签聚类选K-Means，有监督是SVM等",
  "pitfall": "K-Means需人为指定K，对初值和异常值敏感"
 },
 {
  "id": "single-36",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 36,
  "stem": "在模型服务化中，gRPC相比REST的主要优势是？",
  "options": [
   {
    "key": "A",
    "text": "基于HTTP/1"
   },
   {
    "key": "B",
    "text": "二进制传输更高效"
   },
   {
    "key": "C",
    "text": "无需IDL"
   },
   {
    "key": "D",
    "text": "仅支持Python"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "gRPC基于HTTP/2与Protocol Buffers，用二进制序列化和多路复用，比基于文本JSON的REST更省带宽、延迟更低，并支持流式调用；它跨语言，但需要写IDL（.proto）定义接口。",
  "tip": "gRPC=HTTP/2+Protobuf二进制",
  "pitfall": "gRPC需IDL定义接口，不是无IDL"
 },
 {
  "id": "single-37",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 37,
  "stem": "用于文本去重的SimHash算法核心思想是？",
  "options": [
   {
    "key": "A",
    "text": "局部敏感哈希"
   },
   {
    "key": "B",
    "text": "梯度下降"
   },
   {
    "key": "C",
    "text": "序列标注"
   },
   {
    "key": "D",
    "text": "注意力机制"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "SimHash把文本特征哈希成固定长度指纹，内容相近的文本指纹汉明距离小，属局部敏感哈希，适合大规模近似去重。梯度下降、序列标注、注意力机制都与去重指纹无关。",
  "tip": "SimHash看海明距离，越小越相似",
  "pitfall": "SimHash比的是指纹距离，不是原文逐字比对"
 },
 {
  "id": "single-38",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 38,
  "stem": "下列哪项技术可检测对抗样本攻击？",
  "options": [
   {
    "key": "A",
    "text": "梯度掩码"
   },
   {
    "key": "B",
    "text": "输入变换"
   },
   {
    "key": "C",
    "text": "特征压缩"
   },
   {
    "key": "D",
    "text": "以上都是"
   }
  ],
  "answer": "D",
  "accept": [
   "D"
  ],
  "status": "ok",
  "explain": "梯度掩码（隐藏梯度）、输入变换（去噪、压缩、重采样）与特征压缩（如降低色彩位深）都是对抗样本检测与防御的常见手段，单独使用都可能被更强攻击绕过，故「以上都是」成立。",
  "tip": "对抗防御三招：掩梯度、变输入、压特征",
  "pitfall": "本题选「以上都是」，别只盯单个方法"
 },
 {
  "id": "single-39",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 39,
  "stem": "在模型监控中，概念漂移（Concept Drift）指？",
  "options": [
   {
    "key": "A",
    "text": "数据分布随时间变化"
   },
   {
    "key": "B",
    "text": "训练时间过长"
   },
   {
    "key": "C",
    "text": "显存不足"
   },
   {
    "key": "D",
    "text": "学习率过高"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "doubt",
  "insight": "概念漂移的严格定义是目标概念 P(y|X)（输入到输出的映射关系）随时间变化；而「数据分布随时间变化」更宽，输入分布变化叫协变量漂移/数据漂移。考试题里 A 是唯一合理选项，但严谨表述应为「输入与输出的关系发生变化」，否则会与数据漂移混淆。",
  "explain": "概念漂移的严格定义是输入到输出的映射P(y|X)随时间变化，即同一输入对应的标签规律改变。A「数据分布随时间变化」更宽泛，仅输入分布变化属协变量漂移，但四项中只有A贴近定义。",
  "tip": "概念漂移=P(y|X)变，不只是X变",
  "pitfall": "仅输入分布变叫数据/协变量漂移，不是概念漂移"
 },
 {
  "id": "single-40",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 40,
  "stem": "下列哪项工具常用于深度学习可视化？",
  "options": [
   {
    "key": "A",
    "text": "TensorBoard"
   },
   {
    "key": "B",
    "text": "Excel"
   },
   {
    "key": "C",
    "text": "Wireshark"
   },
   {
    "key": "D",
    "text": "Postman"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "TensorBoard可记录并可视化标量曲线、计算图、直方图和图像，是深度学习训练调试的常用工具。Excel、Wireshark、Postman分别用于表格处理、抓包分析和接口调试，不专门服务深度学习可视化。",
  "tip": "TensorBoard看曲线、计算图、直方图",
  "pitfall": "Wireshark抓包、Postman调接口，与可视化无关"
 },
 {
  "id": "single-41",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 41,
  "stem": "在语音识别中，CTC损失解决了？",
  "options": [
   {
    "key": "A",
    "text": "输入输出对齐问题"
   },
   {
    "key": "B",
    "text": "梯度爆炸"
   },
   {
    "key": "C",
    "text": "过拟合"
   },
   {
    "key": "D",
    "text": "数据不平衡"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "CTC引入空白符并枚举所有可能的对齐路径，把变长输入序列直接映射到较短的标签序列，无需逐帧对齐标注，解决语音识别的输入输出对齐问题。它不针对梯度爆炸、过拟合或数据不平衡。",
  "tip": "CTC加blank，免逐帧对齐",
  "pitfall": "CTC要求输入长度不小于标签长度，靠blank填空隙"
 },
 {
  "id": "single-42",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 42,
  "stem": "下列哪项属于元学习（Meta-learning）的典型方法？",
  "options": [
   {
    "key": "A",
    "text": "MAML"
   },
   {
    "key": "B",
    "text": "ResNet"
   },
   {
    "key": "C",
    "text": "AlexNet"
   },
   {
    "key": "D",
    "text": "VGG"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "MAML属元学习，通过寻找对多个任务都易微调的初始化参数，使模型在新任务上用少量样本做几次梯度更新即可适应。ResNet、AlexNet、VGG都是具体的图像分类网络结构，不属于元学习。",
  "tip": "MAML学「好初始化」，少样本快速适应",
  "pitfall": "MAML是元学习思想，不是一种新网络结构"
 },
 {
  "id": "single-43",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 43,
  "stem": "用于加速训练的多卡并行策略Data Parallel是指？",
  "options": [
   {
    "key": "A",
    "text": "模型分片"
   },
   {
    "key": "B",
    "text": "数据分片"
   },
   {
    "key": "C",
    "text": "混合精度"
   },
   {
    "key": "D",
    "text": "梯度累积"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "数据并行把一个大batch切分到多卡，每卡持有完整模型副本、计算各自梯度，再同步汇总更新参数。模型分片对应张量并行或流水并行，混合精度与梯度累积是训练技巧，不是数据并行的定义。",
  "tip": "数据并行切数据，模型并行切模型",
  "pitfall": "数据并行每卡存全模型，显存受模型大小限制"
 },
 {
  "id": "single-44",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 44,
  "stem": "在图像超分辨率中，PSNR指标的单位是？",
  "options": [
   {
    "key": "A",
    "text": "dB"
   },
   {
    "key": "B",
    "text": "Hz"
   },
   {
    "key": "C",
    "text": "px"
   },
   {
    "key": "D",
    "text": "FPS"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "PSNR由均方误差换算而来：PSNR=10·log10(MAX^2/MSE)，单位是分贝dB，值越高说明重建质量越好。Hz衡量频率，px是像素单位，FPS是帧率，都不是PSNR的单位。",
  "tip": "PSNR单位dB，越高越接近原图",
  "pitfall": "PSNR与MSE负相关，MSE越大PSNR越低"
 },
 {
  "id": "single-45",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 45,
  "stem": "下列哪项技术可将文本转为向量且保留语义？",
  "options": [
   {
    "key": "A",
    "text": "Word2Vec"
   },
   {
    "key": "B",
    "text": "TF-IDF"
   },
   {
    "key": "C",
    "text": "One-hot"
   },
   {
    "key": "D",
    "text": "朴素贝叶斯"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "Word2Vec通过上下文预测训练稠密词向量，语义相近的词在向量空间距离更近，能保留语义关系。TF-IDF与One-hot都是稀疏统计表示，体现不出词间相似性；朴素贝叶斯是分类器。",
  "tip": "Word2Vec稠密带语义，One-hot稀疏无相似",
  "pitfall": "One-hot任意两词正交，看不出相似度"
 },
 {
  "id": "single-46",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 46,
  "stem": "在强化学习中，策略梯度（Policy Gradient）直接优化？",
  "options": [
   {
    "key": "A",
    "text": "价值函数"
   },
   {
    "key": "B",
    "text": "策略函数"
   },
   {
    "key": "C",
    "text": "奖励函数"
   },
   {
    "key": "D",
    "text": "状态转移"
   }
  ],
  "answer": "B",
  "accept": [
   "B"
  ],
  "status": "ok",
  "explain": "策略梯度直接对策略函数π(a|s)参数化，用回报的梯度估计来更新参数，使高回报动作被选中的概率上升。Q-learning等值函数方法才是间接更新价值函数，奖励函数与状态转移由环境给定。",
  "tip": "策略梯度直接调π，值方法先估价值",
  "pitfall": "REINFORCE用采样回报，方差大，需引入基线"
 },
 {
  "id": "single-47",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 47,
  "stem": "下列哪种方法可缓解训练数据不足？",
  "options": [
   {
    "key": "A",
    "text": "迁移学习"
   },
   {
    "key": "B",
    "text": "增加层数"
   },
   {
    "key": "C",
    "text": "提高分辨率"
   },
   {
    "key": "D",
    "text": "减少正则化"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "迁移学习把源领域的预训练模型或知识迁移到目标领域，在目标数据有限时复用已有表示，是缓解数据不足的常用方法。加层、提高分辨率会加重数据需求，减少正则化则更容易过拟合。",
  "tip": "数据不够：先预训练，再迁移",
  "pitfall": "迁移要当心源域与目标域的分布差异"
 },
 {
  "id": "single-48",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 48,
  "stem": "在CNN中，Global Average Pooling的作用是？",
  "options": [
   {
    "key": "A",
    "text": "减少参数量"
   },
   {
    "key": "B",
    "text": "增加感受野"
   },
   {
    "key": "C",
    "text": "替代激活函数"
   },
   {
    "key": "D",
    "text": "提高学习率"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "Global Average Pooling把每个通道的特征图求全局均值成一个数，直接接分类层，代替大参数量全连接层，显著减少参数并降低过拟合。它不扩大感受野，也不是激活函数。",
  "tip": "GAP按通道求均值，替代全连接层",
  "pitfall": "GAP减少参数，但会丢失空间位置信息"
 },
 {
  "id": "single-49",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 49,
  "stem": "用于文本匹配的Siamese网络特点是？",
  "options": [
   {
    "key": "A",
    "text": "共享权重"
   },
   {
    "key": "B",
    "text": "不同输入不同网络"
   },
   {
    "key": "C",
    "text": "仅支持CNN"
   },
   {
    "key": "D",
    "text": "无需损失函数"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "Siamese网络用同一套权重（共享参数）分别编码两段输入，再比较输出向量的相似度，保证两侧特征处在同一空间、可比。它不是不同输入用不同网络，也不限于CNN，训练仍需损失函数。",
  "tip": "双塔共享权重，编码后比相似度",
  "pitfall": "共享权重是核心，孪生不等于两个独立模型"
 },
 {
  "id": "single-50",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 50,
  "stem": "下列哪项技术可将模型部署到移动设备？",
  "options": [
   {
    "key": "A",
    "text": "TensorFlow Lite"
   },
   {
    "key": "B",
    "text": "Docker"
   },
   {
    "key": "C",
    "text": "Kubernetes"
   },
   {
    "key": "D",
    "text": "Hadoop"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "TensorFlow Lite面向移动端与嵌入式设备，通过格式转换与量化等优化精简模型，提供低延迟、小体积的本地推理。Docker、Kubernetes是容器与编排工具，Hadoop是大数据框架。",
  "tip": "端侧部署：TFLite、NCNN、ONNX Runtime",
  "pitfall": "Docker、K8s管服务部署，不是端侧推理框架"
 },
 {
  "id": "single-51",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 51,
  "stem": "在NLP中，Subword Tokenization的优势是？",
  "options": [
   {
    "key": "A",
    "text": "平衡词表大小与语义粒度"
   },
   {
    "key": "B",
    "text": "仅支持英文"
   },
   {
    "key": "C",
    "text": "增加OOV"
   },
   {
    "key": "D",
    "text": "降低计算效率"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "Subword分词把词拆成更小的子词单元，用有限词表覆盖开放词汇，既控制词表规模又保留语义粒度，还能缓解未登录词问题。它并非仅支持英文，也不以增加OOV为优势，故选A。",
  "tip": "子词分词：词表可控，缓解OOV",
  "pitfall": "BPE、WordPiece、SentencePiece都是子词方法"
 },
 {
  "id": "single-52",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 52,
  "stem": "下列哪项属于模型解释性工具？",
  "options": [
   {
    "key": "A",
    "text": "LIME"
   },
   {
    "key": "B",
    "text": "Adam"
   },
   {
    "key": "C",
    "text": "ReLU"
   },
   {
    "key": "D",
    "text": "Dropout"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "LIME在样本附近做扰动并拟合可解释的局部代理模型，解释单个预测的依据，属于模型解释性工具。Adam是优化器，ReLU是激活函数，Dropout是正则化手段，三者都不是解释工具。",
  "tip": "LIME局部可解释，SHAP基于Shapley值",
  "pitfall": "LIME是局部近似、稳定性有限，别当全局结论"
 },
 {
  "id": "single-53",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 53,
  "stem": "在Diffusion模型采样中，DDIM的作用是？",
  "options": [
   {
    "key": "A",
    "text": "加速采样"
   },
   {
    "key": "B",
    "text": "增加噪声"
   },
   {
    "key": "C",
    "text": "降低精度"
   },
   {
    "key": "D",
    "text": "替换UNet"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "DDIM把Diffusion的反向过程改造为非马尔可夫的确定性采样，允许跳步，用远少于DDPM的步数生成样本，大幅加速采样。它不增加噪声、不替换UNet结构，核心收益就是少步数采样。",
  "tip": "DDIM跳步采样，几十步即可出图",
  "pitfall": "DDIM快，但可能牺牲一部分生成多样性"
 },
 {
  "id": "single-54",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 54,
  "stem": "下列哪项技术可自动搜索数据增强策略？",
  "options": [
   {
    "key": "A",
    "text": "AutoAugment"
   },
   {
    "key": "B",
    "text": "Grid Search"
   },
   {
    "key": "C",
    "text": "随机裁剪"
   },
   {
    "key": "D",
    "text": "水平翻转"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "AutoAugment用搜索算法在增强策略空间里自动寻找最优的增强操作组合与强度，以验证集精度为奖励。Grid Search是超参搜索，随机裁剪与水平翻转是固定的人工增强，不涉及自动搜索。",
  "tip": "AutoAugment搜增强策略，不搜超参",
  "pitfall": "AutoAugment搜索成本高，有Fast等改进版"
 },
 {
  "id": "single-55",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 55,
  "stem": "在推荐系统中，冷启动问题不包括？",
  "options": [
   {
    "key": "A",
    "text": "新用户"
   },
   {
    "key": "B",
    "text": "新物品"
   },
   {
    "key": "C",
    "text": "新算法"
   },
   {
    "key": "D",
    "text": "稀疏数据"
   }
  ],
  "answer": "C",
  "accept": [
   "C"
  ],
  "status": "ok",
  "explain": "推荐冷启动指新用户、新物品或数据稀疏导致无法可靠建模的问题；新算法属于模型选型与迭代问题，与冷启动无关。题干问「不包括」，故选C。",
  "tip": "冷启动三类：新用户、新物品、新系统",
  "pitfall": "数据稀疏也常被归入冷启动范畴"
 },
 {
  "id": "single-56",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 56,
  "stem": "下列哪项损失函数用于边界框回归？",
  "options": [
   {
    "key": "A",
    "text": "Smooth L1"
   },
   {
    "key": "B",
    "text": "交叉熵"
   },
   {
    "key": "C",
    "text": "NLL"
   },
   {
    "key": "D",
    "text": "Hinge"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "边界框回归常输出坐标偏移，Smooth L1在误差小时用平方、大时用线性，兼顾小误差的平滑与大误差的稳健，是Faster R-CNN等的经典选择。交叉熵、NLL、Hinge主要用于分类。",
  "tip": "框回归用Smooth L1，分类用交叉熵",
  "pitfall": "现在更常用IoU/GIoU/DIoU损失直接优化重叠度"
 },
 {
  "id": "single-57",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 57,
  "stem": "在模型蒸馏中，学生模型学习的是？",
  "options": [
   {
    "key": "A",
    "text": "教师模型的输出分布"
   },
   {
    "key": "B",
    "text": "原始标签"
   },
   {
    "key": "C",
    "text": "损失函数"
   },
   {
    "key": "D",
    "text": "优化器"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "知识蒸馏让学生模型拟合教师模型经温度softmax输出的软标签分布，从类别间相似性等暗知识中学习，再结合真实标签训练。学生并不直接学原始标签、损失函数或优化器。",
  "tip": "学生学教师输出的软标签分布",
  "pitfall": "软标签含类间相似性，硬标签没有这层信息"
 },
 {
  "id": "single-58",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 58,
  "stem": "下列哪项技术可实现实时语音克隆？",
  "options": [
   {
    "key": "A",
    "text": "VITS"
   },
   {
    "key": "B",
    "text": "ResNet"
   },
   {
    "key": "C",
    "text": "YOLO"
   },
   {
    "key": "D",
    "text": "GloVe"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "VITS把变分自编码器、归一化流与对抗训练结合，实现文本到语音的端到端合成，支持少样本乃至实时语音克隆。ResNet是图像网络，YOLO是做检测的，GloVe是词向量，均与语音合成无关。",
  "tip": "VITS端到端TTS，常用于声音克隆",
  "pitfall": "语音克隆还有Tacotron、FastSpeech等方案"
 },
 {
  "id": "single-59",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 59,
  "stem": "在图注意力网络（GAT）中，注意力系数用于？",
  "options": [
   {
    "key": "A",
    "text": "加权聚合邻居特征"
   },
   {
    "key": "B",
    "text": "更新节点标签"
   },
   {
    "key": "C",
    "text": "随机丢弃边"
   },
   {
    "key": "D",
    "text": "增加噪声"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "GAT用注意力机制为每个节点计算其邻居的注意力系数，再按系数加权求和邻居特征，还能多头并行，使不同邻居的贡献可学习。它不更新节点标签、不随机丢边，也不加噪声。",
  "tip": "GAT：注意力系数加权聚合邻居",
  "pitfall": "GAT的注意力在节点与其邻居之间，不同于序列自注意"
 },
 {
  "id": "single-60",
  "type": "single",
  "book": 1,
  "section": "single",
  "num": 60,
  "stem": "下列哪项工具可管理ML实验与复现？",
  "options": [
   {
    "key": "A",
    "text": "MLflow"
   },
   {
    "key": "B",
    "text": "Photoshop"
   },
   {
    "key": "C",
    "text": "VSCode"
   },
   {
    "key": "D",
    "text": "Chrome"
   }
  ],
  "answer": "A",
  "accept": [
   "A"
  ],
  "status": "ok",
  "explain": "MLflow提供实验跟踪、参数与指标记录、模型打包和部署注册，便于管理ML实验与复现结果。Photoshop、VSCode、Chrome分别是图像处理、代码编辑和浏览器工具，不承担实验管理。",
  "tip": "MLflow记参数指标，管实验复现",
  "pitfall": "MLflow重实验管理，数据版本要靠DVC等工具"
 },
 {
  "id": "multi-01",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 1,
  "stem": "以下哪些是常见的机器学习类型？",
  "options": [
   {
    "key": "A",
    "text": "监督学习"
   },
   {
    "key": "B",
    "text": "无监督学习"
   },
   {
    "key": "C",
    "text": "强化学习"
   },
   {
    "key": "D",
    "text": "迁移学习"
   }
  ],
  "answer": "ABCD",
  "accept": [
   "ABCD"
  ],
  "status": "borderline",
  "insight": "迁移学习严格说是「学习范式/方法」而非按标签划分的「学习类型」（后者常列监督、无监督、强化、半监督）。不过很多教材把它并列为一类，且本题未设「半监督学习」选项，ABCD 可接受，不必改。",
  "explain": "A✓监督学习；B✓无监督学习；C✓强化学习；D✓迁移学习。前三者按有无标签划分，迁移学习按知识复用划分，属学习范式，多数教材也并列收录，故ABCD均可。",
  "tip": "按标签分三类，迁移按知识复用",
  "pitfall": "易漏D，以为只有监督/无监督/强化三类"
 },
 {
  "id": "multi-02",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 2,
  "stem": "以下哪些属于监督学习任务？",
  "options": [
   {
    "key": "A",
    "text": "图像分类"
   },
   {
    "key": "B",
    "text": "房价预测"
   },
   {
    "key": "C",
    "text": "垃圾邮件检测"
   },
   {
    "key": "D",
    "text": "客户分群"
   }
  ],
  "answer": "ABC",
  "accept": [
   "ABC"
  ],
  "status": "ok",
  "explain": "A✓图像分类；B✓房价预测（回归，有连续标签）；C✓垃圾邮件检测（二分类）；D✗客户分群属无监督聚类，无标签。前三项都是输入-标签对训练，答案ABC。",
  "tip": "有标签=监督；分群聚类=无监督",
  "pitfall": "误把客户分群当监督分类而多选D"
 },
 {
  "id": "multi-03",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 3,
  "stem": "以下哪些属于无监督学习任务？",
  "options": [
   {
    "key": "A",
    "text": "图像分类"
   },
   {
    "key": "B",
    "text": "客户分群"
   },
   {
    "key": "C",
    "text": "数据降维"
   },
   {
    "key": "D",
    "text": "异常检测"
   }
  ],
  "answer": "BCD",
  "accept": [
   "BCD"
  ],
  "status": "ok",
  "explain": "A✗图像分类需标签，属监督；B✓客户分群靠聚类；C✓数据降维如PCA；D✓异常检测通常无标签。后三项都无需人工标注，答案BCD。",
  "tip": "无标签三件套：聚类、降维、异常检测",
  "pitfall": "异常检测有时用监督做法，但教材口径归无监督"
 },
 {
  "id": "multi-04",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 4,
  "stem": "以下哪些是神经网络中常用的层？",
  "options": [
   {
    "key": "A",
    "text": "输入层"
   },
   {
    "key": "B",
    "text": "隐藏层 (全连接层、卷积层、循环层等)"
   },
   {
    "key": "C",
    "text": "输出层"
   },
   {
    "key": "D",
    "text": "池化层"
   }
  ],
  "answer": "ABCD",
  "accept": [
   "ABCD"
  ],
  "status": "ok",
  "explain": "A✓输入层；B✓隐藏层，含全连接层、卷积层、循环层等；C✓输出层；D✓池化层。四类都是神经网络中常见且基础的层，池化层尤其容易被漏选，答案ABCD。",
  "tip": "输入、隐藏、输出加池化",
  "pitfall": "把池化层误当独立网络而漏选D"
 },
 {
  "id": "multi-05",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 5,
  "stem": "以下哪些是常用的激活函数？",
  "options": [
   {
    "key": "A",
    "text": "Sigmoid"
   },
   {
    "key": "B",
    "text": "ReLU"
   },
   {
    "key": "C",
    "text": "Tanh"
   },
   {
    "key": "D",
    "text": "Softmax (常用于输出层)"
   }
  ],
  "answer": "ABCD",
  "accept": [
   "ABCD"
  ],
  "status": "ok",
  "explain": "A✓Sigmoid；B✓ReLU；C✓Tanh；D✓Softmax。四者都引入非线性，Softmax虽常用于多分类输出层，仍属激活函数，答案ABCD。",
  "tip": "Sigmoid、ReLU、Tanh、Softmax四件套",
  "pitfall": "误以为Softmax只是输出层操作而非激活函数"
 },
 {
  "id": "multi-06",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 6,
  "stem": "以下哪些是常用的损失函数？",
  "options": [
   {
    "key": "A",
    "text": "均方误差 (MSE - 回归)"
   },
   {
    "key": "B",
    "text": "交叉熵损失 (Cross-Entropy - 分类)"
   },
   {
    "key": "C",
    "text": "平均绝对误差 (MAE - 回归)"
   },
   {
    "key": "D",
    "text": "Hinge Loss (SVM)"
   }
  ],
  "answer": "ABCD",
  "accept": [
   "ABCD"
  ],
  "status": "ok",
  "explain": "A✓MSE用于回归；B✓交叉熵用于分类；C✓MAE用于回归，对异常值更稳健；D✓Hinge用于SVM最大间隔。四者都是常用损失函数，答案ABCD。",
  "tip": "回归MSE/MAE，分类交叉熵，SVM用Hinge",
  "pitfall": "漏选MAE或Hinge，以为损失函数只有MSE与交叉熵"
 },
 {
  "id": "multi-07",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 7,
  "stem": "以下哪些是常用的模型评估指标？",
  "options": [
   {
    "key": "A",
    "text": "准确率 (分类)"
   },
   {
    "key": "B",
    "text": "精确率 (分类)"
   },
   {
    "key": "C",
    "text": "召回率 (分类)"
   },
   {
    "key": "D",
    "text": "F1分数 (分类)"
   },
   {
    "key": "E",
    "text": "均方误差 (回归)"
   },
   {
    "key": "F",
    "text": "R平方 (回归)"
   }
  ],
  "answer": "ABCDEF",
  "accept": [
   "ABCDEF"
  ],
  "status": "ok",
  "explain": "A✓准确率；B✓精确率；C✓召回率；D✓F1分数；E✓均方误差；F✓R平方。前四项用于分类，后两项用于回归，六项都是常用评估指标，答案ABCDEF。",
  "tip": "分类看P/R/F1，回归看MSE/R²",
  "pitfall": "以为回归指标不算评估指标而漏选E、F"
 },
 {
  "id": "multi-08",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 8,
  "stem": "以下哪些方法可以用来防止过拟合？",
  "options": [
   {
    "key": "A",
    "text": "获取更多训练数据"
   },
   {
    "key": "B",
    "text": "使用正则化 (L1, L2)"
   },
   {
    "key": "C",
    "text": "使用 Dropout"
   },
   {
    "key": "D",
    "text": "使用数据增强"
   },
   {
    "key": "E",
    "text": "早停法"
   }
  ],
  "answer": "ABCDE",
  "accept": [
   "ABCDE"
  ],
  "status": "ok",
  "explain": "A✓获取更多数据；B✓L1/L2正则化；C✓Dropout随机失活；D✓数据增强；E✓早停法。五项都靠增加数据多样性或限制模型容量抑制过拟合，答案ABCDE。",
  "tip": "数据、正则、Dropout、增强、早停",
  "pitfall": "漏选早停或数据增强，只记住正则与Dropout"
 },
 {
  "id": "multi-09",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 9,
  "stem": "以下哪些是常用的数据预处理步骤？",
  "options": [
   {
    "key": "A",
    "text": "处理缺失值"
   },
   {
    "key": "B",
    "text": "处理异常值"
   },
   {
    "key": "C",
    "text": "特征缩放/标准化"
   },
   {
    "key": "D",
    "text": "特征编码 (如独热编码)"
   },
   {
    "key": "E",
    "text": "特征选择"
   }
  ],
  "answer": "ABCDE",
  "accept": [
   "ABCDE"
  ],
  "status": "ok",
  "explain": "A✓缺失值处理；B✓异常值处理；C✓特征缩放与标准化；D✓特征编码如独热编码；E✓特征选择。五项都是建模前的常见预处理步骤，答案ABCDE。",
  "tip": "缺、异、缩、编、选，预处理五步",
  "pitfall": "误把特征选择归入特征工程而非预处理而漏选"
 },
 {
  "id": "multi-10",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 10,
  "stem": "以下哪些是自然语言处理 (NLP) 的常见任务？",
  "options": [
   {
    "key": "A",
    "text": "文本分类"
   },
   {
    "key": "B",
    "text": "情感分析"
   },
   {
    "key": "C",
    "text": "机器翻译"
   },
   {
    "key": "D",
    "text": "命名实体识别"
   },
   {
    "key": "E",
    "text": "问答系统"
   }
  ],
  "answer": "ABCDE",
  "accept": [
   "ABCDE"
  ],
  "status": "ok",
  "explain": "A✓文本分类；B✓情感分析；C✓机器翻译；D✓命名实体识别；E✓问答系统。五项都围绕语言文本，均为NLP常见任务，答案ABCDE。",
  "tip": "分、情、译、识、答，NLP五任务",
  "pitfall": "漏选问答系统，以为它只算应用不算任务"
 },
 {
  "id": "multi-11",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 11,
  "stem": "以下哪些是计算机视觉 (CV) 的常见任务？",
  "options": [
   {
    "key": "A",
    "text": "图像分类"
   },
   {
    "key": "B",
    "text": "目标检测"
   },
   {
    "key": "C",
    "text": "图像分割"
   },
   {
    "key": "D",
    "text": "人脸识别"
   },
   {
    "key": "E",
    "text": "图像生成"
   }
  ],
  "answer": "ABCDE",
  "accept": [
   "ABCDE"
  ],
  "status": "ok",
  "explain": "A✓图像分类；B✓目标检测；C✓图像分割；D✓人脸识别；E✓图像生成。五项都在图像上做识别或生成，均属CV常见任务，答案ABCDE。",
  "tip": "分类、检测、分割、识别、生成",
  "pitfall": "以为图像生成不算CV任务而漏选E"
 },
 {
  "id": "multi-12",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 12,
  "stem": "以下哪些是常用的特征工程方法？",
  "options": [
   {
    "key": "A",
    "text": "特征缩放 (标准化/归一化)"
   },
   {
    "key": "B",
    "text": "特征编码 (独热/标签)"
   },
   {
    "key": "C",
    "text": "特征选择 (过滤/包裹/嵌入)"
   },
   {
    "key": "D",
    "text": "特征构造 (组合/变换)"
   },
   {
    "key": "E",
    "text": "特征提取 (PCA/自动编码器)"
   }
  ],
  "answer": "ABCDE",
  "accept": [
   "ABCDE"
  ],
  "status": "ok",
  "explain": "A✓特征缩放；B✓特征编码；C✓特征选择；D✓特征构造；E✓特征提取（PCA、自编码器）。五项都属特征工程范畴，答案ABCDE。",
  "tip": "缩、编、选、造、提，特征工程五法",
  "pitfall": "把特征提取误归为模型压缩或降维专属，漏选E"
 },
 {
  "id": "multi-13",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 13,
  "stem": "以下哪些是生成式 AI 模型的例子？",
  "options": [
   {
    "key": "A",
    "text": "用于分类的 CNN"
   },
   {
    "key": "B",
    "text": "生成图片的 GAN"
   },
   {
    "key": "C",
    "text": "生成文本的 GPT"
   },
   {
    "key": "D",
    "text": "生成音乐的模型"
   },
   {
    "key": "E",
    "text": "用于预测的 LSTM"
   }
  ],
  "answer": "BCD",
  "accept": [
   "BCD"
  ],
  "status": "ok",
  "explain": "A✗用于分类的CNN是判别式模型；B✓生成图片的GAN；C✓生成文本的GPT；D✓生成音乐的模型；E✗用于预测的LSTM是判别式用法。生成式核心是产出新样本，答案BCD。",
  "tip": "生成≠判别：能造新样本才算",
  "pitfall": "把生成音乐模型漏掉，或因LSTM也能生成而误选E"
 },
 {
  "id": "multi-14",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 14,
  "stem": "以下哪些是模型部署到生产环境后需要考虑的方面？",
  "options": [
   {
    "key": "A",
    "text": "模型推理速度 (延迟)"
   },
   {
    "key": "B",
    "text": "模型处理请求的能力 (吞吐量)"
   },
   {
    "key": "C",
    "text": "模型消耗的计算资源 (CPU/GPU/内存)"
   },
   {
    "key": "D",
    "text": "模型的监控和维护"
   },
   {
    "key": "E",
    "text": "模型的安全性"
   }
  ],
  "answer": "ABCDE",
  "accept": [
   "ABCDE"
  ],
  "status": "ok",
  "explain": "A✓推理延迟；B✓吞吐量；C✓CPU/GPU/内存开销；D✓监控与维护；E✓安全性。五项都是模型上线后必须权衡的工程要素，答案ABCDE。",
  "tip": "延迟、吞吐、资源、运维、安全",
  "pitfall": "只盯性能漏选D、E，安全与运维同样是生产必选项"
 },
 {
  "id": "multi-15",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 15,
  "stem": "以下哪些是常用的 Python 库在 AI/ML 项目中？",
  "options": [
   {
    "key": "A",
    "text": "NumPy (数值计算)"
   },
   {
    "key": "B",
    "text": "Pandas (数据处理)"
   },
   {
    "key": "C",
    "text": "Matplotlib / Seaborn (可视化)"
   },
   {
    "key": "D",
    "text": "Scikit-learn (传统 ML)"
   },
   {
    "key": "E",
    "text": "PyTorch / TensorFlow (深度学习)"
   }
  ],
  "answer": "ABCDE",
  "accept": [
   "ABCDE"
  ],
  "status": "ok",
  "explain": "A✓NumPy数值计算；B✓Pandas数据处理；C✓Matplotlib/Seaborn可视化；D✓Scikit-learn传统ML；E✓PyTorch/TensorFlow深度学习。五项均为AI/ML常用库，答案ABCDE。",
  "tip": "算、洗、画、传统ML、深度学习",
  "pitfall": "以为可视化库不算AI库而漏选C"
 },
 {
  "id": "multi-16",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 16,
  "stem": "以下哪些是集成学习的方法？",
  "options": [
   {
    "key": "A",
    "text": "Bagging (如随机森林)"
   },
   {
    "key": "B",
    "text": "Boosting (如 AdaBoost, XGBoost)"
   },
   {
    "key": "C",
    "text": "Stacking"
   },
   {
    "key": "D",
    "text": "Dropout (属于正则化，非集成)"
   }
  ],
  "answer": "ABC",
  "accept": [
   "ABC"
  ],
  "status": "ok",
  "explain": "A✓Bagging如随机森林；B✓Boosting如AdaBoost、XGBoost；C✓Stacking堆叠；D✗Dropout属正则化手段，不是集成。前三项是集成学习三大范式，答案ABC。",
  "tip": "Bagging、Boosting、Stacking三范式",
  "pitfall": "易把Dropout误当集成方法多选D"
 },
 {
  "id": "multi-17",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 17,
  "stem": "以下哪些是处理时间序列数据的常用模型？",
  "options": [
   {
    "key": "A",
    "text": "ARIMA (传统统计)"
   },
   {
    "key": "B",
    "text": "LSTM / GRU (深度学习)"
   },
   {
    "key": "C",
    "text": "Prophet (Facebook)"
   },
   {
    "key": "D",
    "text": "1D CNN (深度学习)"
   },
   {
    "key": "E",
    "text": "线性回归 (简单基线)"
   }
  ],
  "answer": "ABCDE",
  "accept": [
   "ABCDE"
  ],
  "status": "ok",
  "explain": "A✓ARIMA传统统计模型；B✓LSTM/GRU；C✓Prophet；D✓1D CNN；E✓线性回归可作简单基线。五项都能对时间序列建模预测，答案ABCDE。",
  "tip": "统计ARIMA、深度RNN、Prophet、1D CNN",
  "pitfall": "以为线性回归不算时间序列模型而漏选E"
 },
 {
  "id": "multi-18",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 18,
  "stem": "迁移学习的典型应用场景包括？",
  "options": [
   {
    "key": "A",
    "text": "目标任务数据量非常大"
   },
   {
    "key": "B",
    "text": "目标任务数据量有限"
   },
   {
    "key": "C",
    "text": "目标任务与源任务有相关性"
   },
   {
    "key": "D",
    "text": "需要快速构建原型"
   }
  ],
  "answer": "BCD",
  "accept": [
   "BCD"
  ],
  "status": "ok",
  "explain": "A✗目标数据量很大时直接训练即可，迁移收益小；B✓目标数据有限；C✓源与目标任务相关；D✓需快速原型。迁移的价值在借源知识补目标数据不足，答案BCD。",
  "tip": "数据少、任务相关、要快出原型",
  "pitfall": "误选A，以为数据大也适合迁移而多选"
 },
 {
  "id": "multi-19",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 19,
  "stem": "以下哪些是常用的推荐系统算法？",
  "options": [
   {
    "key": "A",
    "text": "协同过滤 (基于用户/物品)"
   },
   {
    "key": "B",
    "text": "基于内容的推荐"
   },
   {
    "key": "C",
    "text": "混合推荐"
   },
   {
    "key": "D",
    "text": "矩阵分解"
   }
  ],
  "answer": "ABCD",
  "accept": [
   "ABCD"
  ],
  "status": "ok",
  "explain": "A✓协同过滤（基于用户或物品）；B✓基于内容的推荐；C✓混合推荐；D✓矩阵分解。四项都是常用推荐系统算法，答案ABCD。",
  "tip": "协同、内容、混合、矩阵分解",
  "pitfall": "把矩阵分解误当降维专属而漏选D"
 },
 {
  "id": "multi-20",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 20,
  "stem": "模型压缩的常用技术包括？",
  "options": [
   {
    "key": "A",
    "text": "模型剪枝"
   },
   {
    "key": "B",
    "text": "模型量化"
   },
   {
    "key": "C",
    "text": "知识蒸馏"
   },
   {
    "key": "D",
    "text": "增加模型深度"
   }
  ],
  "answer": "ABC",
  "accept": [
   "ABC"
  ],
  "status": "ok",
  "explain": "A✓模型剪枝，去掉冗余权重；B✓模型量化，降低数值位宽；C✓知识蒸馏，用小模型学大模型输出；D✗增加模型深度只会让模型更大，不是压缩。答案ABC。",
  "tip": "剪、量、蒸馏，压缩三招",
  "pitfall": "误把增加深度当压缩手段多选D"
 },
 {
  "id": "multi-21",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 21,
  "stem": "卷积神经网络的组成包括？",
  "options": [
   {
    "key": "A",
    "text": "卷积层"
   },
   {
    "key": "B",
    "text": "池化层"
   },
   {
    "key": "C",
    "text": "循环层"
   },
   {
    "key": "D",
    "text": "全连接层"
   }
  ],
  "answer": "ABD",
  "accept": [
   "ABD"
  ],
  "status": "ok",
  "explain": "A✓卷积层；B✓池化层；C✗循环层属RNN结构，用于序列建模；D✓全连接层。CNN通常由卷积、池化、全连接堆叠而成，答案ABD。",
  "tip": "卷积加池化，尾部接全连接",
  "pitfall": "把循环层混入CNN结构而多选C"
 },
 {
  "id": "multi-22",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 22,
  "stem": "以下属于集成学习方法的是？",
  "options": [
   {
    "key": "A",
    "text": "Bagging"
   },
   {
    "key": "B",
    "text": "Boosting"
   },
   {
    "key": "C",
    "text": "Dropout"
   },
   {
    "key": "D",
    "text": "批归一化"
   }
  ],
  "answer": "AB",
  "accept": [
   "AB"
  ],
  "status": "ok",
  "explain": "A✓Bagging；B✓Boosting；C✗Dropout是随机失活的防过拟合手段；D✗批归一化是稳定与加速训练的手段。只有AB属于集成学习，答案AB。",
  "tip": "集成靠多模型组合，非单模型技巧",
  "pitfall": "易多选Dropout与批归一化，两者都不是集成"
 },
 {
  "id": "multi-23",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 23,
  "stem": "影响模型泛化能力的因素有？",
  "options": [
   {
    "key": "A",
    "text": "训练数据量"
   },
   {
    "key": "B",
    "text": "模型复杂度"
   },
   {
    "key": "C",
    "text": "损失函数类型"
   },
   {
    "key": "D",
    "text": "优化器选择"
   }
  ],
  "answer": "AB",
  "accept": [
   "AB",
   "ABCD"
  ],
  "status": "doubt",
  "insight": "文件答案 AB 按「教材式主要因素」（数据量、模型复杂度）可以理解，但严格说 C、D 也影响泛化：损失函数（标签平滑、Focal Loss）改变决策边界与置信度校准；优化器（SGD 的隐式正则 vs Adam 的锐利极小）存在可观测的泛化差距。若考试要选「全部成立项」应为 ABCD；建议题干加「主要」二字，AB 才无歧义。",
  "explain": "A✓训练数据量；B✓模型复杂度；C✓损失函数类型，标签平滑、Focal会改变决策边界与置信度；D✓优化器选择，不同优化器泛化表现有差异。按教材主要因素口径AB，严格应为ABCD。",
  "tip": "数据、容量、损失、优化四因素",
  "pitfall": "按教材答AB者常忽略C、D，严格题应选ABCD"
 },
 {
  "id": "multi-24",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 24,
  "stem": "自然语言处理任务包括？",
  "options": [
   {
    "key": "A",
    "text": "机器翻译"
   },
   {
    "key": "B",
    "text": "命名实体识别"
   },
   {
    "key": "C",
    "text": "图像分类"
   },
   {
    "key": "D",
    "text": "语音合成"
   }
  ],
  "answer": "AB",
  "accept": [
   "AB",
   "ABD"
  ],
  "status": "doubt",
  "insight": "语音合成（TTS）输入是文本、常被归入「语音处理/语音技术」，主流 NLP 教材任务清单（分类、NER、翻译、问答、情感分析）不含它，所以 AB 可接受。但若课程按「语言+语音」宽口径划分，D 也算，此时答案应为 ABD。属口径问题，不是硬错误。",
  "explain": "A✓机器翻译；B✓命名实体识别；C✗图像分类属CV；D语音合成输入是文本，但主流归语音技术，宽口径可含。主流NLP清单不含TTS，按此口径AB，宽口径ABD。",
  "tip": "翻译与NER稳选，TTS看口径",
  "pitfall": "D语音合成口径不一，主流不选，宽口径选ABD"
 },
 {
  "id": "multi-25",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 25,
  "stem": "以下技术用于模型压缩？",
  "options": [
   {
    "key": "A",
    "text": "剪枝"
   },
   {
    "key": "B",
    "text": "量化"
   },
   {
    "key": "C",
    "text": "数据增强"
   },
   {
    "key": "D",
    "text": "特征缩放"
   }
  ],
  "answer": "AB",
  "accept": [
   "AB"
  ],
  "status": "ok",
  "explain": "A✓剪枝去掉冗余权重；B✓量化降低数值位宽；C✗数据增强是扩充样本；D✗特征缩放属数据预处理。模型压缩只针对模型本身，答案AB。",
  "tip": "剪枝减连接，量化降位宽",
  "pitfall": "把数据增强或特征缩放当压缩手段多选C、D"
 },
 {
  "id": "multi-26",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 26,
  "stem": "强化学习基本要素包括？",
  "options": [
   {
    "key": "A",
    "text": "状态"
   },
   {
    "key": "B",
    "text": "动作"
   },
   {
    "key": "C",
    "text": "奖励"
   },
   {
    "key": "D",
    "text": "数据集"
   }
  ],
  "answer": "ABC",
  "accept": [
   "ABC"
  ],
  "status": "ok",
  "explain": "A✓状态；B✓动作；C✓奖励；D✗数据集不是强化学习基本要素。智能体靠与环境交互的回报信号学习，核心要素还有策略与状态转移，答案ABC。",
  "tip": "状态、动作、奖励，交互三要素",
  "pitfall": "把数据集当要素多选D，RL不靠静态标注数据集"
 },
 {
  "id": "multi-27",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 27,
  "stem": "过拟合的解决策略有？",
  "options": [
   {
    "key": "A",
    "text": "正则化"
   },
   {
    "key": "B",
    "text": "增加数据"
   },
   {
    "key": "C",
    "text": "减少模型层数"
   },
   {
    "key": "D",
    "text": "提高学习率"
   }
  ],
  "answer": "ABC",
  "accept": [
   "ABC"
  ],
  "status": "ok",
  "explain": "A✓正则化加约束；B✓增加数据；C✓减少模型层数以降低容量；D✗提高学习率易致训练震荡，不是治过拟合手段。前三项都能缓解过拟合，答案ABC。",
  "tip": "增数据、加正则、降容量",
  "pitfall": "以为提高学习率能防过拟合而多选D"
 },
 {
  "id": "multi-28",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 28,
  "stem": "图神经网络应用场景包括？",
  "options": [
   {
    "key": "A",
    "text": "推荐系统"
   },
   {
    "key": "B",
    "text": "分子属性预测"
   },
   {
    "key": "C",
    "text": "图像识别"
   },
   {
    "key": "D",
    "text": "文本分类"
   }
  ],
  "answer": "AB",
  "accept": [
   "AB",
   "ABCD",
   "ABD"
  ],
  "status": "doubt",
  "insight": "文件答案 AB 只覆盖最常见的推荐系统与分子属性预测场景。GNN 用于文本分类已有 TextGCN 等成熟工作（文档-词构图为图），用于图像识别也有 ViG、超像素图、点云图等方法，因此 C、D 也有依据。严格按「应用场景包括」应为 ABCD；若题干限定「典型场景」，AB 可接受。",
  "explain": "A✓推荐系统；B✓分子属性预测；C✓图像识别可用ViG、超像素图、点云图；D✓文本分类有TextGCN以文档-词构图。四者均有GNN实践，按典型场景AB，严格应为ABCD。",
  "tip": "推荐、分子之外，图像文本也能图化",
  "pitfall": "C、D有GNN成熟应用，严格题别只答AB"
 },
 {
  "id": "multi-29",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 29,
  "stem": "以下属于无监督学习任务的是？",
  "options": [
   {
    "key": "A",
    "text": "聚类"
   },
   {
    "key": "B",
    "text": "降维"
   },
   {
    "key": "C",
    "text": "分类"
   },
   {
    "key": "D",
    "text": "回归"
   }
  ],
  "answer": "AB",
  "accept": [
   "AB"
  ],
  "status": "ok",
  "explain": "A✓聚类如K-Means；B✓降维如PCA；C✗分类需标签，属监督；D✗回归需连续标签，属监督。无监督只用无标签数据发现内在结构，答案AB。",
  "tip": "聚类、降维无监督，分类、回归有监督",
  "pitfall": "把分类或回归当无监督任务多选C、D"
 },
 {
  "id": "multi-30",
  "type": "multi",
  "book": 1,
  "section": "multi",
  "num": 30,
  "stem": "模型部署方式包括？",
  "options": [
   {
    "key": "A",
    "text": "云端API"
   },
   {
    "key": "B",
    "text": "边缘设备"
   },
   {
    "key": "C",
    "text": "数据库存储"
   },
   {
    "key": "D",
    "text": "训练集群"
   }
  ],
  "answer": "AB",
  "accept": [
   "AB"
  ],
  "status": "ok",
  "explain": "A✓云端API；B✓边缘设备；C✗数据库存储不是部署形态；D✗训练集群用于训练而非推理部署。常见部署形态为云、边、端，答案AB。",
  "tip": "云API、边缘设备、移动端",
  "pitfall": "把数据库存储或训练集群误当部署方式多选"
 },
 {
  "id": "qa1-01",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 1,
  "stem": "什么是过拟合？ 怎么判断模型可能过拟合了？",
  "options": [],
  "answer": "过拟合指模型在训练数据上表现很好，但在新数据（测试集）上表现差。判断：训练集精度远高于测试集精度。",
  "accept": [
   "过拟合指模型在训练数据上表现很好，但在新数据（测试集）上表现差。判断：训练集精度远高于测试集精度。"
  ],
  "status": "ok",
  "explain": "要点1：过拟合是模型连同训练集中的噪声与细节一起记住，在训练集上表现很好、在新数据上表现差，本质是泛化能力不足；要点2：判断看训练集与验证集指标的差距，差距显著即过拟合，训练损失持续下降而验证损失先降后升是典型曲线；要点3：加分点可提训练准确率接近100%、样本少参数多、学习曲线训练与验证开口变大，对策有正则化、Dropout、早停、数据增强、增加数据。评分关键词：训练好、测试差、泛化。",
  "tip": "过拟合：训练好、测试差",
  "pitfall": "训练集和测试集都差是欠拟合，别误判成过拟合。"
 },
 {
  "id": "qa1-02",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 2,
  "stem": "什么是欠拟合？ 怎么判断模型可能欠拟合了？",
  "options": [],
  "answer": "欠拟合指模型在训练数据上也表现不好（没学好）。判断：训练集精度低，测试集精度也低。",
  "accept": [
   "欠拟合指模型在训练数据上也表现不好（没学好）。判断：训练集精度低，测试集精度也低。"
  ],
  "status": "ok",
  "explain": "要点1：欠拟合是模型拟合能力不足，在训练集上就没学好，训练与测试指标同时偏低且彼此接近；要点2：判断看训练准确率本身就低、训练损失下降缓慢或早早停在较高位置，加大数据量或训练轮数改善很小；要点3：加分点可提成因如模型过简单、特征不足、正则过强、训练不充分，对策是换更强模型、补特征、减弱正则、延长训练。评分关键词：训练差、测试也差、拟合不足。",
  "tip": "欠拟合：训练差、测试也差",
  "pitfall": "先查模型容量与欠训练，别把训练差直接归为数据太少。"
 },
 {
  "id": "qa1-03",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 3,
  "stem": "简述监督学习和无监督学习的主要区别。",
  "options": [],
  "answer": "监督学习：数据有标签（正确答案），教模型做预测。无监督学习：数据无标签，让模型自己发现数据中的结构/模式。",
  "accept": [
   "监督学习：数据有标签（正确答案），教模型做预测。无监督学习：数据无标签，让模型自己发现数据中的结构/模式。"
  ],
  "status": "ok",
  "explain": "要点1：监督学习的数据带标签，学习输入到标签的映射，目标是预测，典型任务是分类与回归；要点2：无监督学习的数据无标签，目标是发现数据内在结构，典型任务是聚类、降维、异常检测；要点3：加分点可对比标注成本与评估方式，监督需人工标注、成本高但评估直接，无监督无需标注但结果需业务解释、评估较间接，半监督与自监督介于两者之间。评分关键词：标签、映射预测、内在结构。",
  "tip": "有标签做预测，无标签找结构",
  "pitfall": "区别核心是标签有无，别说成准确率高低。"
 },
 {
  "id": "qa1-04",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 4,
  "stem": "为什么在神经网络中需要使用激活函数？",
  "options": [],
  "answer": "引入非线性。没有激活函数，多层网络等价于单层线性模型，无法学习复杂关系。",
  "accept": [
   "引入非线性。没有激活函数，多层网络等价于单层线性模型，无法学习复杂关系。"
  ],
  "status": "ok",
  "explain": "要点1：激活函数的作用是给网络引入非线性，使多层堆叠具备拟合复杂函数的能力；要点2：若没有激活函数或全是线性激活，多层复合仍是线性变换，等价于单层线性模型，加深网络没有意义；要点3：加分点可提激活需非线性且便于求导以支持反向传播，ReLU 缓解梯度消失且计算快，Sigmoid 易饱和，输出层按任务选 Softmax 或线性。评分关键词：非线性、等价单层、梯度。",
  "tip": "无激活，多层等于单层线性",
  "pitfall": "不是只为提速；去掉激活后深度不再带来表达能力。"
 },
 {
  "id": "qa1-05",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 5,
  "stem": "什么是梯度下降？ 它的目标是什么？",
  "options": [],
  "answer": "一种优化算法。目标：通过计算损失函数的梯度（坡度），并沿负梯度方向更新模型参数，以最小化损失函数。",
  "accept": [
   "一种优化算法。目标：通过计算损失函数的梯度（坡度），并沿负梯度方向更新模型参数，以最小化损失函数。"
  ],
  "status": "ok",
  "explain": "要点1：梯度下降是一种一阶优化算法，用损失函数对参数的梯度指出损失上升最快的方向；要点2：沿负梯度方向按学习率逐步更新参数，目标是找到使损失函数最小的参数；要点3：加分点可提学习率过大会震荡甚至发散、过小则收敛慢，按批次分批量、随机、小批量三种，可能停在局部极小或鞍点，需动量与自适应优化器改进。评分关键词：负梯度、学习率、最小化损失。",
  "tip": "顺着负梯度，按学习率走",
  "pitfall": "梯度指向上升最快方向，更新必须取负号。"
 },
 {
  "id": "qa1-06",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 6,
  "stem": "交叉验证 (Cross-Validation) 的主要目的是什么？",
  "options": [],
  "answer": "更可靠地评估模型在未知数据上的性能（泛化能力），减少因单次数据划分带来的随机性误差。",
  "accept": [
   "更可靠地评估模型在未知数据上的性能（泛化能力），减少因单次数据划分带来的随机性误差。"
  ],
  "status": "ok",
  "explain": "要点1：交叉验证把数据分成K折，轮流取一折作验证集、其余作训练集，重复K次后取平均；要点2：目的是更可靠地评估模型在未知数据上的泛化能力，减小单次划分的偶然误差，使结论对数据划分不敏感；要点3：加分点可提K常取5或10、K等于样本数即留一法，用于选超参数和比较模型，预处理必须只在训练折内拟合以避免数据泄露。评分关键词：K折轮换、平均、泛化。",
  "tip": "K折轮换，平均看泛化",
  "pitfall": "先划分再预处理，否则数据泄露使结论偏乐观。"
 },
 {
  "id": "qa1-07",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 7,
  "stem": "什么是数据增强？ 为什么在图像任务中常用？",
  "options": [],
  "answer": "通过人工方法（如旋转、裁剪）增加训练数据量。目的：让模型看到更多变化，提高泛化能力，减轻过拟合。",
  "accept": [
   "通过人工方法（如旋转、裁剪）增加训练数据量。目的：让模型看到更多变化，提高泛化能力，减轻过拟合。"
  ],
  "status": "borderline",
  "insight": "「通过人工方法增加训练数据量」不严谨：数据增强不新增信息，只是扩充等效样本、提升多样性（增强过强还会引入分布偏移）。另外题目问「为什么在图像任务中常用」，更该答图像特有理由：几何/颜色变换通常不改变类别语义、标注成本高、真实数据难获取、可在线增强几乎零成本。",
  "explain": "要点1：数据增强是对训练样本做旋转、裁剪、翻转、颜色扰动等变换，生成语义不变但外观不同的等效样本，提升多样性与泛化、减轻过拟合；要点2：图像任务常用的特有理由是几何与颜色变换通常不改变类别语义、图像标注成本高且真实数据难采集、可在线增强几乎不增加成本；要点3：本题原文答案的问题：把数据增强说成增加训练数据量并不准确，它只是对已有样本做等价变换、并未带来新信息，变换过强还会造成分布偏移。评分关键词：等效样本、多样性、语义不变。",
  "tip": "增强等于变换造等效样本，不增信息",
  "pitfall": "只答增加数据量会失分；图像语义不变是特有理由。"
 },
 {
  "id": "qa1-08",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 8,
  "stem": "迁移学习的基本思想是什么？",
  "options": [],
  "answer": "利用在大任务A上训练好的模型的知识（学到的特征），来帮助更快更好地解决小任务B（尤其当任务B数据少时）。",
  "accept": [
   "利用在大任务A上训练好的模型的知识（学到的特征），来帮助更快更好地解决小任务B（尤其当任务B数据少时）。"
  ],
  "status": "ok",
  "explain": "要点1：迁移学习把在源任务上训练好的知识（参数、特征与表示）迁移到目标任务复用；要点2：核心是借助相关任务的知识降低目标任务对标注数据与算力的需求，目标任务数据少时收益最大；要点3：加分点可提常用做法有预训练加微调、冻结底层只训顶层、直接当特征提取器，也要注意源任务与目标任务差异过大时的负迁移风险。评分关键词：知识复用、预训练微调、负迁移。",
  "tip": "大任务学知识，小任务借用",
  "pitfall": "任务差异大时可能负迁移，别默认一定有效。"
 },
 {
  "id": "qa1-09",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 9,
  "stem": "简要说明卷积神经网络 (CNN) 中卷积层的作用。",
  "options": [],
  "answer": "使用卷积核（过滤器）扫描输入图像，提取局部特征（如边缘、纹理）。",
  "accept": [
   "使用卷积核（过滤器）扫描输入图像，提取局部特征（如边缘、纹理）。"
  ],
  "status": "ok",
  "explain": "要点1：卷积层用可学习的卷积核在输入上滑动做局部加权求和，提取边缘、纹理等局部特征；要点2：多层堆叠形成层级特征，浅层学边缘纹理、深层学部件与语义；要点3：加分点可提局部连接与权重共享大幅减少参数量、带来平移等变性，配合池化获得一定平移不变性，卷积核大小、步长、填充与通道数决定特征图尺寸和感受野。评分关键词：卷积核、局部特征、权重共享。",
  "tip": "卷积核滑窗，提取局部特征",
  "pitfall": "卷积层不是全连接；权重共享与局部连接是得分点。"
 },
 {
  "id": "qa1-10",
  "type": "qa",
  "book": 1,
  "section": "qa1",
  "num": 10,
  "stem": "什么是注意力机制？ 它的核心思想是什么？",
  "options": [],
  "answer": "一种让模型在处理信息时能“聚焦”于输入中重要部分的技术。核心思想：给输入的不同部分分配不同的重要性权重。",
  "accept": [
   "一种让模型在处理信息时能“聚焦”于输入中重要部分的技术。核心思想：给输入的不同部分分配不同的重要性权重。"
  ],
  "status": "ok",
  "explain": "要点1：注意力机制对输入的不同部分计算相关性权重，再按权重加权聚合信息，使模型聚焦重要内容；要点2：核心思想是按需分配重要性，通常用查询与键的相似度经 Softmax 得到权重，再加权求和对应的值；要点3：加分点可提相比固定权重更灵活、权重可可视化增强可解释性，自注意力让序列任意位置直接交互、利于长距离依赖并可并行，是 Transformer 的基础。评分关键词：权重、加权聚合、聚焦。",
  "tip": "算权重、加权聚合、聚焦重点",
  "pitfall": "注意力权重不等于因果重要性，别把可视化当解释。"
 },
 {
  "id": "qa2-01",
  "type": "qa",
  "book": 2,
  "section": "qa2",
  "num": 1,
  "stem": "对比美国与欧盟AI政策的核心差异，并分析其成因。",
  "options": [],
  "answer": "美国：市场导向，鼓励创新，监管宽松（如\"星际之门\"计划）。\n欧盟：严格风险分级，强调权利保护（如《AI法案》禁止社会评分）。\n成因：美国重视技术领先与商业利益；欧盟侧重公民权利与风险防控，受GDPR传统影响。",
  "accept": [
   "美国：市场导向，鼓励创新，监管宽松（如\"星际之门\"计划）。\n欧盟：严格风险分级，强调权利保护（如《AI法案》禁止社会评分）。\n成因：美国重视技术领先与商业利益；欧盟侧重公民权利与风险防控，受GDPR传统影响。"
  ],
  "status": "error",
  "insight": "「星际之门」(Stargate) 是 2025 年 1 月由 OpenAI、软银、甲骨文、MGX 宣布的私营 AI 基础设施投资（约 5000 亿美元/4 年，在白宫宣布），属产业/算力投资，不是美国「放松监管」的政策工具，作例证不成立。美国监管宽松的准确例证：2025 年 1 月撤销拜登 EO 14110、签署 EO 14179《消除美国在 AI 领域领导地位的障碍》、2025 年 7 月《美国 AI 行动计划》，以及联邦层面无统一 AI 立法。欧盟部分（四级风险分级、第 5 条禁止社会评分）与成因分析均准确。",
  "explain": "要点1：美国偏市场导向与创新优先，联邦无统一AI立法，靠既有法律加行业自律，2025年以行政令清理监管障碍、强调保持领先；要点2：欧盟走风险分级立法，AI法案按不可接受、高、有限、最小四级设义务，禁止社会评分等用途，强调基本权利与事前合规；要点3：成因是价值取向差异，美国重技术领先与商业利益，欧盟重公民权利与风险预防并受GDPR传统影响；要点4：本题原文答案的问题：把星际之门当作美国监管宽松的例证不成立，它是私营部门约五千亿美元的算力基础设施投资。评分关键词：市场导向、风险分级、成因。",
  "tip": "美国重创新少立法，欧盟重权利分风险",
  "pitfall": "星际之门是私营算力投资，不是放松监管政策。"
 },
 {
  "id": "qa2-02",
  "type": "qa",
  "book": 2,
  "section": "qa2",
  "num": 2,
  "stem": "列举生成式AI服务的两大合规风险，并说明《生成式AI服务管理暂行办法》如何应对。",
  "options": [],
  "answer": "风险1：虚假信息传播 → 《办法》要求对生成内容标识来源。  风险2：侵犯数据隐私 → 《办法》规定训练数据需合法获取，涉及个人信息须获授权。",
  "accept": [
   "风险1：虚假信息传播 → 《办法》要求对生成内容标识来源。  风险2：侵犯数据隐私 → 《办法》规定训练数据需合法获取，涉及个人信息须获授权。"
  ],
  "status": "doubt",
  "insight": "结论方向对，但三处法条转述与原文有偏差：①第十二条是「按照《互联网信息服务深度合成管理规定》对图片、视频等生成内容进行标识」，标识的是「AI 生成」这一属性，不是「来源」；②第七条(一)是「使用具有合法来源的数据和基础模型」，不是「合法获取」；③第七条(三)是「涉及个人信息的，应当取得个人同意或者符合法律、行政法规规定的其他情形」，不是「授权」。另外虚假信息不只靠标识：第四条(一)、第九条内容生产者责任、第十四条停止生成与处置都是主要手段；2025-09-01 起《人工智能生成合成内容标识办法》还要求显式＋隐式标识。",
  "explain": "要点1：风险一是虚假信息与内容失序，手段有标识、审核、停止生成与处置违法内容；要点2：风险二是数据与个人信息侵权，须使用具有合法来源的数据和基础模型，涉及个人信息须取得个人同意或符合法定其他情形；要点3：本题原文答案的问题：第十二条原文要求对图片视频等生成内容进行标识，标的是AI生成属性而非内容来源；第七条（一）原文为使用具有合法来源的数据和基础模型，原答案误写为合法获取；第七条（三）原文为取得个人同意或符合法定其他情形，原答案误写为获得授权；另可补标识办法的显隐式标识要求。评分关键词：标识、合法来源、同意。",
  "tip": "标识生成属性、来源合法、同意优先",
  "pitfall": "标识的是AI生成属性而非来源；来源要合法、个人信息要同意。"
 },
 {
  "id": "qa2-03",
  "type": "qa",
  "book": 2,
  "section": "qa2",
  "num": 3,
  "stem": "简述人脸识别技术的四个关键步骤及其应用场景。",
  "options": [],
  "answer": "图像采集：摄像头捕捉人脸图像（如手机解锁）。人脸检测：定位人脸位置（如门禁系统）。特征提取：提取眼睛/鼻子等特征（生成生物“密码”）。特征匹配：与数据库比对（如安防追踪嫌疑人）。",
  "accept": [
   "图像采集：摄像头捕捉人脸图像（如手机解锁）。人脸检测：定位人脸位置（如门禁系统）。特征提取：提取眼睛/鼻子等特征（生成生物“密码”）。特征匹配：与数据库比对（如安防追踪嫌疑人）。"
  ],
  "status": "ok",
  "explain": "要点1：图像采集，用摄像头获取人脸图像，需考虑光照、角度与分辨率；要点2：人脸检测与定位，在图中框出人脸并做关键点对齐；要点3：特征提取，把眼睛鼻子等区域映射为特征向量，相当于生物密码；要点4：特征匹配，与数据库比对完成一比一验证或一比多识别；场景可覆盖手机解锁、门禁、安防追踪与支付核验，加分点可提活体检测与合规采集。评分关键词：采集、检测、特征提取、匹配。",
  "tip": "采集、检测、提取、匹配四步走",
  "pitfall": "检测是框出人脸，识别是比对身份，两步易混。"
 },
 {
  "id": "qa2-04",
  "type": "qa",
  "book": 2,
  "section": "qa2",
  "num": 4,
  "stem": "AI助教如何通过课堂行为分析推动个性化教育？结合实例说明。",
  "options": [],
  "answer": "AI助教利用摄像头/传感器捕捉学生课堂行为数据（如注意力、参与度）。例如，系统识别到学生A频繁打哈欠（注意力分散），自动通知教师调整教学节奏；检测到学生B积极互动，则推送进阶问题。教师据此定制教学策略，实现因材施教。",
  "accept": [
   "AI助教利用摄像头/传感器捕捉学生课堂行为数据（如注意力、参与度）。例如，系统识别到学生A频繁打哈欠（注意力分散），自动通知教师调整教学节奏；检测到学生B积极互动，则推送进阶问题。教师据此定制教学策略，实现因材施教。"
  ],
  "status": "doubt",
  "insight": "本题是开放题，答案方向可以，但有两处硬伤：①弱证据强推断——打哈欠≠注意力分散（疲劳、睡眠不足、遮挡、姿态误判都可能），互动频次≠参与质量，直接「自动通知教师调整教学」缺效度验证与置信度，宜表述为概率性信号＋教师人工复核；②完全没有合规视角——课堂人脸/行为数据属敏感个人信息（未成年人还需监护人同意），《人脸识别技术应用安全管理办法》要求非人脸方式优先、私密场所禁装，教育场景的情绪识别在多国被严格限制。另外「结合实例」给的是假设场景，不是真实案例。",
  "explain": "要点1：技术路径是采集课堂行为数据、提取注意力与参与度等指标、再关联学习结果，向教师反馈并推荐分层资源；要点2：必须承认这些指标只是概率性信号，打哈欠不等于分心，也可能是疲劳、睡眠不足、遮挡或姿态误判，互动多也不等于学得好，应给出置信度并由教师复核；要点3：还须补合规视角，课堂人脸与行为属敏感个人信息，未成年人需监护人同意，应非人脸方式优先、私密场所禁装；要点4：本题原文答案的问题：以打哈欠直接推断分心并自动通知教师属弱证据强推断，且完全缺合规讨论。评分关键词：个性化、弱信号、合规。",
  "tip": "弱信号加人工复核，先合规后技术",
  "pitfall": "打哈欠不等于分心；课堂行为数据属敏感个人信息。"
 },
 {
  "id": "qa2-05",
  "type": "qa",
  "book": 2,
  "section": "qa2",
  "num": 5,
  "stem": "简述有监督学习与无监督学习的区别，并各举一个应用实例。",
  "options": [],
  "answer": "区别：有监督学习使用带标签的数据训练模型，目标是预测输出；无监督学习使用无标签数据，目标是发现数据内在结构。\n有监督实例：垃圾邮件过滤（输入邮件特征，输出是否为垃圾邮件）。\n无监督实例：客户分群（根据购买行为将客户聚类，无预定义类别）。",
  "accept": [
   "区别：有监督学习使用带标签的数据训练模型，目标是预测输出；无监督学习使用无标签数据，目标是发现数据内在结构。\n有监督实例：垃圾邮件过滤（输入邮件特征，输出是否为垃圾邮件）。\n无监督实例：客户分群（根据购买行为将客户聚类，无预定义类别）。"
  ],
  "status": "ok",
  "explain": "要点1：有监督学习用带标签数据学输入到输出的映射，目标是预测，需要人工标注，可用准确率、F1直接评估；要点2：无监督学习用无标签数据发现内在结构，没有标准答案，评估较难，常看轮廓系数或下游效果；要点3：实例方面，有监督如垃圾邮件过滤与房价预测，无监督如客户分群、异常检测、降维可视化；加分点可提标注成本差异与半监督、自监督的过渡形态。评分关键词：标签、映射预测、内在结构。",
  "tip": "有监督猜结果，无监督找结构",
  "pitfall": "有监督不等于准确率高，核心区别在标签有无。"
 },
 {
  "id": "qa2-06",
  "type": "qa",
  "book": 2,
  "section": "qa2",
  "num": 6,
  "stem": "说明推荐系统中协同过滤与基于内容推荐的差异，并各举一例。",
  "options": [],
  "answer": "协同过滤：基于用户行为相似度（如“喜欢科幻电影的用户A和B，A新看电影推荐给B”）。\n基于内容推荐：基于物品特征匹配（如“用户常看科技新闻，推荐其他科技类文章”）。\n差异：协同过滤依赖用户行为数据，内容推荐依赖物品特征分析。",
  "accept": [
   "协同过滤：基于用户行为相似度（如“喜欢科幻电影的用户A和B，A新看电影推荐给B”）。\n基于内容推荐：基于物品特征匹配（如“用户常看科技新闻，推荐其他科技类文章”）。\n差异：协同过滤依赖用户行为数据，内容推荐依赖物品特征分析。"
  ],
  "status": "ok",
  "explain": "要点1：协同过滤基于群体行为相似性，找相似用户或相似物品做推荐，如都喜欢科幻的用户A与B，把A新看的电影推给B；要点2：基于内容的推荐用物品自身特征与用户历史偏好匹配，如常看科技新闻就推科技类文章；要点3：差异在于协同过滤依赖用户行为数据、能带来跨类发现但受冷启动与数据稀疏困扰，内容推荐依赖物品特征、新物品也能推但易同质化；加分点可提混合推荐与可解释性。评分关键词：行为相似、特征匹配、冷启动。",
  "tip": "协同靠人群行为，内容靠物品特征",
  "pitfall": "协同过滤不是协同办公；冷启动是它的主要短板。"
 }
];
