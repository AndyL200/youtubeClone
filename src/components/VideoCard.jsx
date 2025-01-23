import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  console.log(snippet)
  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* question mark check for null values before trying to reference something that may or may not exist */}
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: '358px', height: '180px' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}></Link>
        <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}></Link>
        <Typography variant='subtitle2' fontWeight='bold' color='grey'>
          {snippet?.channelTitle || demoChannelTitle}
          {/* ml for margin left */}
          <CheckCircle sx={{ fontSize: 12, color: 'grey', ml: '5px' }} />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VideoCard
