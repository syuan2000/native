
import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({job, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity 
    style={styles.container(selectedJob, job)}
    onPress={()=>handleCardPress(job)}
    >
      <TouchableOpacity 
      style={styles.logoContainer(selectedJob, job)}
      >
        <Image 
          source={{uri:checkImageURL(job.employee_logo)
          ? job.employee_logo
        : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}
          resizeMode='contain'
          style={styles.logoImage}
          />
      </TouchableOpacity>
      <Text 
      style={styles.companyName} 
      numberOfLines={1}>{job.employee_name}</Text>
      <View style={styles.infoContainer}>
        <Text 
        style={styles.jobName(selectedJob, job)} 
        numberOfLines={1}>{job.job_title}</Text>
        <Text style={styles.location} >{job.country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard