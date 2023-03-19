#!/usr/bin/env bash
echo "**** installing ffmpeg ****"
echo "User1"
useradd -G admin user1
echo user1:new_password | chpasswd

echo "User2"
useradd -G admin user2
echo user2:new_password2 | chpasswd
