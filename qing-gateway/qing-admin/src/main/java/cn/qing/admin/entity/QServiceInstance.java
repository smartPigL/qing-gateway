package cn.qing.admin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author conghuhu
 * @since 2022-04-08
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value="QServiceInstance对象", description="")
public class QServiceInstance implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "应用id")
    private Long serviceId;

    @ApiModelProperty(value = "实例的版本号")
    private String version;

    @ApiModelProperty(value = "实例ip")
    private String ip;

    @ApiModelProperty(value = "实例port")
    private String port;

    @ApiModelProperty(value = "权重")
    private Integer weight;

    @ApiModelProperty(value = "集群")
    @TableField("clusterName")
    private String clustername;

    @ApiModelProperty(value = "服务实例的协议")
    private String protocol;

    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    @ApiModelProperty(value = "创建时间")
    private LocalDateTime createdTime;


}
