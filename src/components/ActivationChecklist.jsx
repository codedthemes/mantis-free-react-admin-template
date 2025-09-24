import { useState, useEffect } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';

// project imports
import MainCard from 'components/MainCard';

// assets
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import DatabaseOutlined from '@ant-design/icons/DatabaseOutlined';
import UserAddOutlined from '@ant-design/icons/UserAddOutlined';
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';

// hooks
import useMixpanelTracking from 'hooks/useMixpanelTracking';

const checklistItems = [
  {
    id: 'connect-data-source',
    title: 'Connect data source',
    description: 'Link your first data source to start analyzing',
    icon: DatabaseOutlined,
    autoComplete: () => {
      // Check if user has connected any data source
      // This would typically check API or local storage
      return localStorage.getItem('hasDataSource') === 'true';
    }
  },
  {
    id: 'invite-teammate',
    title: 'Invite a teammate',
    description: 'Collaborate better with your team',
    icon: UserAddOutlined,
    autoComplete: () => {
      // Check if user has invited team members
      return localStorage.getItem('hasInvitedTeammate') === 'true';
    }
  },
  {
    id: 'create-dashboard',
    title: 'Create first dashboard',
    description: 'Build your first data visualization',
    icon: DashboardOutlined,
    autoComplete: () => {
      // Check if user has created a dashboard
      return localStorage.getItem('hasCreatedDashboard') === 'true';
    }
  }
];

export default function ActivationChecklist() {
  const [isVisible, setIsVisible] = useState(true);
  const [completedItems, setCompletedItems] = useState(new Set());
  const { trackClick } = useMixpanelTracking();

  // Check for auto-completion on mount and periodically
  useEffect(() => {
    const checkAutoComplete = () => {
      const newCompleted = new Set();
      checklistItems.forEach(item => {
        if (item.autoComplete()) {
          newCompleted.add(item.id);
        }
      });
      setCompletedItems(newCompleted);
    };

    checkAutoComplete();

    // Check every 5 seconds for auto-completion
    const interval = setInterval(checkAutoComplete, 5000);
    return () => clearInterval(interval);
  }, []);

  // Don't show if dismissed
  useEffect(() => {
    const isDismissed = localStorage.getItem('activationChecklistDismissed') === 'true';
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('activationChecklistDismissed', 'true');
    setIsVisible(false);
    trackClick('Activation Checklist Dismissed', {
      completed_items: completedItems.size,
      total_items: checklistItems.length
    });
  };

  const handleItemClick = (item) => {
    trackClick('Activation Checklist Item Clicked', {
      item_id: item.id,
      item_title: item.title,
      is_completed: completedItems.has(item.id)
    });
  };

  const completionPercentage = (completedItems.size / checklistItems.length) * 100;
  const isFullyCompleted = completedItems.size === checklistItems.length;

  // Hide if fully completed for more than a day
  useEffect(() => {
    if (isFullyCompleted) {
      const completionTime = localStorage.getItem('activationChecklistCompletionTime');
      if (!completionTime) {
        localStorage.setItem('activationChecklistCompletionTime', Date.now().toString());
      } else {
        const daysSinceCompletion = (Date.now() - parseInt(completionTime)) / (1000 * 60 * 60 * 24);
        if (daysSinceCompletion > 1) {
          setIsVisible(false);
        }
      }
    }
  }, [isFullyCompleted]);

  return null;

  return (
    <Collapse in={isVisible}>
      <Box sx={{ mb: 3 }}>
        <MainCard
          sx={{
            border: '2px solid',
            borderColor: isFullyCompleted ? 'success.main' : 'primary.main',
            bgcolor: isFullyCompleted ? 'success.lighter' : 'primary.lighter',
            '&:hover': {
              boxShadow: (theme) => theme.customShadows.z8
            }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <IconButton
              size="small"
              onClick={handleDismiss}
              sx={{
                position: 'absolute',
                right: -8,
                top: -8,
                bgcolor: 'background.paper',
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              <CloseOutlined style={{ fontSize: '14px' }} />
            </IconButton>

            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                {isFullyCompleted ? (
                  <CheckCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                ) : (
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 600
                    }}
                  >
                    {completedItems.size}
                  </Box>
                )}
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {isFullyCompleted ? 'Setup Complete! 🎉' : 'Complete your setup'}
                </Typography>
              </Box>

              {!isFullyCompleted && (
                <Typography variant="body2" color="text.secondary">
                  Get the most out of your dashboard by completing these steps
                </Typography>
              )}

              <Box sx={{ width: '100%' }}>
                <LinearProgress
                  variant="determinate"
                  value={completionPercentage}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: 'grey.200',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: isFullyCompleted ? 'success.main' : 'primary.main',
                      borderRadius: 3
                    }
                  }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  {completedItems.size} of {checklistItems.length} completed
                </Typography>
              </Box>

              <List sx={{ py: 0 }}>
                {checklistItems.map((item) => {
                  const ItemIcon = item.icon;
                  const isCompleted = completedItems.has(item.id);

                  return (
                    <ListItem
                      key={item.id}
                      sx={{
                        px: 0,
                        py: 1,
                        cursor: 'pointer',
                        borderRadius: 1,
                        '&:hover': { bgcolor: 'action.hover' },
                        opacity: isCompleted ? 0.7 : 1
                      }}
                      onClick={() => handleItemClick(item)}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Checkbox
                          edge="start"
                          checked={isCompleted}
                          tabIndex={-1}
                          disableRipple
                          sx={{
                            '&.Mui-checked': {
                              color: 'success.main'
                            }
                          }}
                        />
                      </ListItemIcon>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <ItemIcon
                          style={{
                            fontSize: '18px',
                            color: isCompleted ? '#52c41a' : '#666'
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle2"
                            sx={{
                              textDecoration: isCompleted ? 'line-through' : 'none',
                              fontWeight: isCompleted ? 400 : 500
                            }}
                          >
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" color="text.secondary">
                            {item.description}
                          </Typography>
                        }
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Stack>
          </Box>
        </MainCard>
      </Box>
    </Collapse>
  );
}