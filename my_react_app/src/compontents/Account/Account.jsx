// components/Account/Account.js
import React, { useState, useEffect } from 'react';
import { Input, Typography, Button, Card, message } from 'antd';
import { useUpdateUserMutation } from '../../services/userService/userService';
import { useNavigate } from 'react-router-dom';

export const Account = () => {
  const [formData, setFormData] = useState({ name: '', email: '', avatar: '', number: '' });
  const [updateUser, { isLoading, isSuccess, isError }] = useUpdateUserMutation();
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFormData({
        id: user.id,
        name: user.name || '',
        email: user.email,
        password: user.password,
        avatar: user.avatar || '',
        number: user.number || ''
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData)
      .then((res) => {
        if (res.data.ok) {
          messageApi.success('Данные успешно сохранены!');
        }
      })
      .catch((err) => {
        messageApi.error('Произошла ошибка при сохранении данных.');
      });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '60px'
    }}>
      {contextHolder}
      <Card>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <Typography.Title>Личный кабинет</Typography.Title>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div>
                <Typography.Text>Имя</Typography.Text>
                <Input name='name' placeholder='Имя' value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <Typography.Text>Email</Typography.Text>
                <Input name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <Typography.Text>Новый пароль</Typography.Text>
                <Input name='password' placeholder='Новый пароль' onChange={handleChange}/>
              </div>
              <div>
                <Typography.Text>Номер</Typography.Text>
                <Input name='number' placeholder='Номер' value={formData.number} onChange={handleChange} />
              </div>
              <div>
                <Button type="primary" htmlType="submit" loading={isLoading}>Сохранить</Button>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

